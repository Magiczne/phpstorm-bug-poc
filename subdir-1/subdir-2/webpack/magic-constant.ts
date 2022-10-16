import { readFileSync } from 'fs'

const getMagicConstant = (): string => {
  try {
    return readFileSync('./version.txt').toString()
  } catch {
    return ''
  }
}

export {
  getMagicConstant
}
