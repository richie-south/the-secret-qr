const isFirstFindKeyValue = 'is-first-find'

export const qrCode0 = '677d572f-1392-475a-bd70-491b530f6dfd'
export const qrCode1 = 'a47a540d-3713-4270-8b00-a5101ee7be07'
export const qrCode2 = 'cfccb9ab-adab-45f3-9b8c-652815e84fdb'
export const qrCode3 = 'f1f97ade-f59a-4034-9d28-575d587a124d'
export const qrCode4 = '62937f4e-e76d-4a99-8372-175efc548194'

export type QRCodes =
  | typeof qrCode0
  | typeof qrCode1
  | typeof qrCode2
  | typeof qrCode3
  | typeof qrCode4

export function isFirstFind(): boolean {
  const isFirst = localStorage.getItem(isFirstFindKeyValue)

  return isFirst !== isFirstFindKeyValue
}

export function setFirstFind() {
  localStorage.setItem(isFirstFindKeyValue, isFirstFindKeyValue)
}

export function saveFoundQRCode(code: QRCodes) {
  localStorage.setItem(code, code)
}

export function hasFoundQRCode(code: QRCodes) {
  const item = localStorage.getItem(code) ?? ''

  return [qrCode0, qrCode1, qrCode2, qrCode3, qrCode4].includes(item)
}

export function getFoundQrCodes(): QRCodes[] {
  const found: QRCodes[] = []

  if (hasFoundQRCode(qrCode0)) found.push(qrCode0)
  if (hasFoundQRCode(qrCode1)) found.push(qrCode1)
  if (hasFoundQRCode(qrCode2)) found.push(qrCode2)
  if (hasFoundQRCode(qrCode3)) found.push(qrCode3)
  if (hasFoundQRCode(qrCode4)) found.push(qrCode4)

  return found
}

export function resetGame() {
  localStorage.clear()
}
