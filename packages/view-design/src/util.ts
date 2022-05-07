import { onBeforeUpdate, onUpdated } from '@vue/composition-api'
export function useUpdateMeasure() {
  onBeforeUpdate(() => {
    performance.mark('array-table update start')
  })

  onUpdated(() => {
    performance.mark('array-table update end')
    performance.measure(
      'array-table update',
      'array-table update start',
      'array-table update end'
    )
    const measures = performance.getEntriesByName('array-table update')
    // eslint-disable-next-line no-console
    console.log('array-table update duration:', measures[0].duration)
    performance.clearMarks()
    performance.clearMeasures()
  })
}
