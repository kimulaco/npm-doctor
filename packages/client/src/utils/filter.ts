export const toByteString = (num: number): string => {
  let byteNum: number = num
  let byteUnit: string = 'B'

  if (byteNum > 1000000000) {
    byteNum = Math.round(byteNum / 1000000000 * 10) / 10
    byteUnit = 'GB'
  } else if (byteNum > 1000000) {
    byteNum = Math.round(byteNum / 1000000 * 10) / 10
    byteUnit = 'MB'
  } else if (byteNum > 1000) {
    byteNum = Math.round(byteNum / 1000 * 10) / 10
    byteUnit = 'KB'
  }

  return `${byteNum} ${byteUnit}`
}
