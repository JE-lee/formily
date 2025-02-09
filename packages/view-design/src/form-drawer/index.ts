import { h, FormProvider, Fragment } from '@formily/vue'
import { createForm, isForm } from '@formily/core'
import { isNum, isStr, isBool, isFn } from '@formily/shared'
import { Drawer, Button } from 'view-design'
import type { Drawer as DrawerProps, Button as ButtonProps } from 'view-design'
import { t } from 'element-ui/src/locale'
import Vue, { Component, VNode } from 'vue'
import { isValidElement, resolveComponent } from '../__builtins__/shared'
import { stylePrefix } from '../__builtins__/configs'
import { defineComponent } from '@vue/composition-api'
import { Portal, PortalTarget } from 'portal-vue'

type FormDrawerContentProps = { resolve: () => any; reject: () => any }

type FormDrawerContent = Component | ((props: FormDrawerContentProps) => VNode)

type ModalTitle = string | number | Component | VNode | (() => VNode)

type Cb = (done: () => void) => void

type IFormDrawerProps = Omit<DrawerProps & { beforeClose: Cb }, 'title'> & {
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

const PORTAL_TARGET_NAME = 'FormDrawerFooter'

const isDrawerTitle = (props: any): props is ModalTitle => {
  return isNum(props) || isStr(props) || isBool(props) || isValidElement(props)
}

const getDrawerProps = (props: any): IFormDrawerProps => {
  if (isDrawerTitle(props)) {
    return {
      title: props,
    } as IFormDrawerProps
  } else {
    return props
  }
}

export interface IFormDrawer {
  open(props?: Formily.Core.Types.IFormProps): Promise<any>
  close(): void
}

export interface IFormDrawerComponentProps {
  form: any
  close: any
  content: FormDrawerContent
  resolve: () => any
  reject: () => any
}

export function FormDrawer(
  title: IFormDrawerProps,
  content: FormDrawerContent
): IFormDrawer
export function FormDrawer(
  title: ModalTitle,
  content: FormDrawerContent
): IFormDrawer
export function FormDrawer(title: any, content: any): IFormDrawer {
  const prefixCls = `${stylePrefix}-form-drawer`
  const env = {
    root: document.createElement('div'),
    form: null,
    promise: null,
    instance: null,
  }

  document.body.appendChild(env.root)

  const props = getDrawerProps(title)
  const drawerProps = {
    ...props,
    onClosed: () => {
      props.onClosed?.()
      env.instance.$destroy()
      env.instance = null
      env.root?.parentNode?.removeChild(env.root)
      env.root = undefined
    },
  }

  const component = defineComponent<IFormDrawerComponentProps>({
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
    reject?: (error?: Error) => any
  ) => {
    if (!env.instance) {
      const ComponentConstructor = Vue.extend({
        data() {
          return {
            visible: false,
          }
        },
        render() {
          const { onClosed, ...drawerProps } = this.drawerProps

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
                  Drawer,
                  {
                    class: [`${prefixCls}`],
                    attrs: {
                      value: this.visible,
                      ...drawerProps,
                      transfer: false, // required
                    },
                    on: {
                      input: (val) => {
                        this.visible = val
                      },
                      // close: () => {
                      //   drawerProps.onClose?.()
                      // },

                      // closed: () => {
                      //   drawerProps.onClosed?.()
                      // },
                      // open: () => {
                      //   drawerProps.onOpen?.()
                      // },
                      // opend: () => {
                      //   drawerProps.onOpend?.()
                      // },
                      'on-visible-change': (val) => {
                        drawerProps.onVisibleChange?.(val)
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
                        'div',
                        {
                          class: [`${prefixCls}-body`],
                        },
                        {
                          default: () =>
                            h(
                              component,
                              {
                                props: {
                                  resolve,
                                  reject,
                                  content,
                                  close: formDrawer.close,
                                },
                              },
                              {}
                            ),
                        }
                      ),
                      h(
                        'div',
                        {
                          class: [`${prefixCls}-footer`],
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

                            const footer = drawerProps.footer
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
                                  attrs: drawerProps.cancelButtonProps,
                                  on: {
                                    click: (e) => {
                                      drawerProps?.onCancel?.(e)
                                      if (drawerProps.beforeClose) {
                                        drawerProps.beforeClose(() => {
                                          formDrawer.close()
                                          reject(new Error('manual close'))
                                        })
                                      } else {
                                        formDrawer.close()
                                        reject(new Error('manual close'))
                                      }
                                    },
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(
                                      drawerProps.cancelText || '取消'
                                    ),
                                }
                              ),

                              h(
                                Button,
                                {
                                  attrs: {
                                    type: 'primary',
                                    ...drawerProps.okButtonProps,
                                  },
                                  on: {
                                    click: (e) => {
                                      drawerProps?.onOK?.(e)
                                      resolve()
                                    },
                                  },
                                },
                                {
                                  default: () =>
                                    resolveComponent(
                                      drawerProps.okText || '确认'
                                    ),
                                }
                              ),
                            ]
                          },
                        }
                      ),
                      h(
                        'div',
                        {
                          slot: 'title',
                        },
                        { default: () => resolveComponent(drawerProps.title) }
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
            drawerProps,
          }
        },
      })
      env.instance.$mount(env.root)
    }

    env.instance.visible = visible
  }

  const formDrawer = {
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
                if (drawerProps.beforeClose) {
                  setTimeout(() => {
                    drawerProps.beforeClose(() => {
                      formDrawer.close()
                    })
                  })
                } else {
                  formDrawer.close()
                }
              })
              .catch(reject)
          },
          (error) => {
            reject(error)
            formDrawer.close()
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
  return formDrawer
}

export const FormDrawerFooter = defineComponent({
  setup(props, { attrs, slots }) {
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
