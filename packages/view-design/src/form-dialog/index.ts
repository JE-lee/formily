import { h, FormProvider, Fragment } from '@formily/vue'
import { createForm, isForm } from '@formily/core'
import { isNum, isStr, isBool } from '@formily/shared'
import { Modal, Button } from 'view-design'
import type { Modal as DialogProps, Button as ButtonProps } from 'view-design'
import Vue, { Component, VNode } from 'vue'
import { isValidElement, resolveComponent } from '../__builtins__/shared'
import { stylePrefix } from '../__builtins__/configs'
import { defineComponent } from '@vue/composition-api'
import { Portal, PortalTarget } from 'portal-vue'

type FormDialogContentProps = { resolve: () => any; reject: () => any }

type FormDialogContent = Component | ((props: FormDialogContentProps) => VNode)

type ModalTitle = string | number | Component | VNode | (() => VNode)

type Cb = (done: () => void) => void

type IFormDialogProps = Omit<DialogProps & { beforeClose: Cb }, 'title'> & {
  title?: ModalTitle
  footer?: null | Component | VNode | (() => VNode)
  cancelText?: string | Component | VNode | (() => VNode)
  cancelButtonProps?: ButtonProps
  okText?: string | Component | VNode | (() => VNode)
  okButtonProps?: ButtonProps
  onOpen?: () => void
  onOpend?: () => void
  onClose?: () => void
  onClosed?: () => void
  onCancel?: () => void
  onOK?: () => void
}

const PORTAL_TARGET_NAME = 'FormDialogFooter'

const isDialogTitle = (props: any): props is ModalTitle => {
  return isNum(props) || isStr(props) || isBool(props) || isValidElement(props)
}

const getDialogProps = (props: any): IFormDialogProps => {
  if (isDialogTitle(props)) {
    return {
      title: props,
    } as IFormDialogProps
  } else {
    return props
  }
}

export interface IFormDialog {
  open(props?: Formily.Core.Types.IFormProps): Promise<any>
  close(): void
}

export interface IFormDialogComponentProps {
  form: any
  close: any
  content: FormDialogContent
  resolve: () => any
  reject: () => any
}

export function FormDialog(
  title: IFormDialogProps,
  content: FormDialogContent
): IFormDialog
export function FormDialog(
  title: ModalTitle,
  content: FormDialogContent
): IFormDialog

export function FormDialog(title: any, content: any): IFormDialog {
  const prefixCls = `${stylePrefix}-form-dialog`
  const env = {
    root: document.createElement('div'),
    form: null,
    promise: null,
    instance: null,
  }

  document.body.appendChild(env.root)

  const props = getDialogProps(title)
  const dialogProps = {
    ...props,
    onClosed: () => {
      props.onClosed?.()
      env.instance.$destroy()
      env.instance = null
      env.root?.parentNode?.removeChild(env.root)
      env.root = undefined
    },
  }

  const component = defineComponent<IFormDialogComponentProps>({
    props: ['content', 'resolve', 'reject', 'close'],
    setup(props) {
      return () =>
        h(
          Fragment,
          {},
          {
            default: () =>
              resolveComponent(props.content, {
                resolve: props.resolve,
                reject: props.reject,
                close: props.close,
              }),
          }
        )
    },
  })

  const render = (
    visible = true,
    resolve?: () => any,
    reject?: (error: Error) => any
  ) => {
    if (!env.instance) {
      const ComponentConstructor = Vue.extend({
        data() {
          return {
            visible: false,
          }
        },
        render() {
          const { onClosed, ...dialogProps } = this.dialogProps

          return h(
            FormProvider,
            {
              props: {
                form: env.form,
              },
            },
            {
              default: () =>
                h(
                  Modal,
                  {
                    class: [`${prefixCls}`],
                    attrs: {
                      value: this.visible,
                      ...dialogProps,
                      transfer: false, // 必须
                    },
                    on: {
                      input: (val) => {
                        this.visible = val
                      },
                      // close: () => {
                      //   dialogProps.onClose?.()
                      // },

                      // closed: () => {
                      //   dialogProps.onClosed?.()
                      // },
                      // open: () => {
                      //   dialogProps.onOpen?.()
                      // },
                      // opend: () => {
                      //   dialogProps.onOpend?.()
                      // },
                      'on-visible-change': (val) => {
                        dialogProps.onVisibleChange?.(val)
                        // 关闭
                        if (!val) {
                          setTimeout(() => onClosed?.(), 200)
                        }
                      },
                      'on-cancel': () => reject(new Error('cancel')),
                    },
                  },
                  {
                    default: () => [
                      h(
                        component,
                        {
                          props: {
                            resolve,
                            reject,
                            content,
                            close: formDialog.close,
                          },
                        },
                        {}
                      ),
                      h(
                        'div',
                        {
                          slot: 'title',
                        },
                        { default: () => resolveComponent(dialogProps.title) }
                      ),
                      h(
                        'div',
                        {
                          slot: 'footer',
                        },
                        {
                          default: () => {
                            const FooterProtalTarget = h(
                              PortalTarget,
                              {
                                props: {
                                  name: PORTAL_TARGET_NAME,
                                  slim: true,
                                },
                              },
                              {}
                            )
                            const footer = dialogProps.footer
                            if (footer === null) {
                              return [null, FooterProtalTarget]
                            } else if (footer) {
                              return [
                                resolveComponent(footer),
                                FooterProtalTarget,
                              ]
                            }

                            return [
                              h(
                                Button,
                                {
                                  attrs: dialogProps.cancelButtonProps,
                                  on: {
                                    click: (e) => {
                                      dialogProps?.onCancel?.(e)
                                      if (dialogProps.beforeClose) {
                                        dialogProps.beforeClose(() => {
                                          formDialog.close()
                                          reject(new Error('manual close'))
                                        })
                                      } else {
                                        formDialog.close()
                                        reject(new Error('manual close'))
                                      }
                                    },
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(
                                      dialogProps.cancelText || '取消'
                                    ),
                                }
                              ),

                              h(
                                Button,
                                {
                                  attrs: {
                                    type: 'primary',
                                    ...dialogProps.okButtonProps,
                                  },
                                  on: {
                                    click: (e) => {
                                      dialogProps?.onOK?.(e)
                                      resolve()
                                    },
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(
                                      dialogProps.okText || '确认'
                                    ),
                                }
                              ),
                              FooterProtalTarget,
                            ]
                          },
                        }
                      ),
                    ],
                  }
                ),
            }
          )
        },
      })
      env.instance = new ComponentConstructor({
        data() {
          return {
            dialogProps,
          }
        },
      })
      env.instance.$mount(env.root)
    }

    env.instance.visible = visible
  }

  const formDialog = {
    open: (props: Formily.Core.Types.IFormProps | Formily.Core.Models.Form) => {
      if (env.promise) return env.promise
      env.form = env.form || (isForm(props) ? props : createForm(props))
      env.promise = new Promise((resolve, reject) => {
        render(
          true,
          () => {
            env.form
              .submit((values: any) => {
                resolve(values)
                if (dialogProps.beforeClose) {
                  setTimeout(() => {
                    dialogProps.beforeClose(() => {
                      formDialog.close()
                    })
                  })
                } else {
                  formDialog.close()
                }
              })
              .catch(reject)
          },
          (error) => {
            reject(error)
            formDialog.close()
          }
        )
      })
      return env.promise
    },
    close: () => {
      if (!env.root) return
      render(false)
    },
  }
  return formDialog
}

export const FormDialogFooter = defineComponent({
  setup(props, { slots }) {
    return () => {
      return h(
        Portal,
        {
          props: {
            to: PORTAL_TARGET_NAME,
          },
        },
        {
          default: () => h(Fragment, {}, slots),
        }
      )
    }
  },
})
