const isFirstFindKeyValue = "is-first-find"

export const qrCode1 = "8ce5e78f-71c6-4827-9f52-0a4762c0e62c"
export const qrCode2 = "c6c08b0d-5313-45c3-927f-e32a41122dbf"
export const qrCode3 = "4c2cd2fc-d512-4b4c-9605-34bbb96be554"
export const qrCode4 = "c2812887-947d-4d82-b8fb-dc1b2e6cd7f6"
export const qrCode5 = "315616bb-5870-4562-aeee-4196d62302c9"
export const qrCode6 = "df6f98dd-81d2-465f-b658-cd2824eb3444"
export const qrCode7 = "43486cc3-7cb7-450c-9321-b56bc38d6b81"
export const qrCode8 = "18214c96-9fd5-4d60-a38b-41d4141b5deb"
export const qrCode9 = "94336213-c603-42a8-a0e0-caeffc221372"
export const qrCode10 = "d614f4d2-6d6a-49af-a412-c28c9dd5d365"
export const qrCode11 = "43fada1c-c852-4545-a7f3-c177ddfc8402"
export const qrCode12 = "4934161c-d09f-486c-a270-dcf8ec0d4605"
export const qrCode13 = "e0fe9928-59f1-45e2-bb7e-f43c81ca5ca1"
export const qrCode14 = "758e8eb9-e77f-4b6c-ace7-8aa7a2ed67b2"
export const qrCode15 = "38878db0-20fa-4dfe-9bd6-41fe17c811d7"
export const qrCode16 = "f5456400-30a5-4072-b871-121f4b3f86b0"
export const qrCode17 = "2b2d8b55-448d-42d2-b311-d57e53d7596b"
export const qrCode18 = "f8561173-75f3-4009-9d5c-8d8d7604f8e5"

export type QRCodes =
  | typeof qrCode1
  | typeof qrCode2
  | typeof qrCode3
  | typeof qrCode4
  | typeof qrCode5
  | typeof qrCode6
  | typeof qrCode7
  | typeof qrCode8
  | typeof qrCode9
  | typeof qrCode10
  | typeof qrCode11
  | typeof qrCode12
  | typeof qrCode13
  | typeof qrCode14
  | typeof qrCode15
  | typeof qrCode16
  | typeof qrCode17
  | typeof qrCode18

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
  const item = localStorage.getItem(code) ?? ""

  return [
    qrCode1,
    qrCode2,
    qrCode3,
    qrCode4,
    qrCode5,
    qrCode6,
    qrCode7,
    qrCode8,
    qrCode9,
    qrCode10,
    qrCode11,
    qrCode12,
    qrCode13,
    qrCode14,
    qrCode15,
    qrCode16,
    qrCode17,
    qrCode18,
  ].includes(item)
}

export function getFoundQrCodes(): QRCodes[] {
  const found: QRCodes[] = []

  if (hasFoundQRCode(qrCode1)) found.push(qrCode1)
  if (hasFoundQRCode(qrCode2)) found.push(qrCode2)
  if (hasFoundQRCode(qrCode3)) found.push(qrCode3)
  if (hasFoundQRCode(qrCode4)) found.push(qrCode4)
  if (hasFoundQRCode(qrCode5)) found.push(qrCode5)
  if (hasFoundQRCode(qrCode6)) found.push(qrCode6)
  if (hasFoundQRCode(qrCode7)) found.push(qrCode7)
  if (hasFoundQRCode(qrCode8)) found.push(qrCode8)
  if (hasFoundQRCode(qrCode9)) found.push(qrCode9)
  if (hasFoundQRCode(qrCode10)) found.push(qrCode10)
  if (hasFoundQRCode(qrCode11)) found.push(qrCode11)
  if (hasFoundQRCode(qrCode12)) found.push(qrCode12)
  if (hasFoundQRCode(qrCode13)) found.push(qrCode13)
  if (hasFoundQRCode(qrCode14)) found.push(qrCode14)
  if (hasFoundQRCode(qrCode15)) found.push(qrCode15)
  if (hasFoundQRCode(qrCode16)) found.push(qrCode16)
  if (hasFoundQRCode(qrCode17)) found.push(qrCode17)
  if (hasFoundQRCode(qrCode18)) found.push(qrCode18)

  return found
}

export function resetGame() {
  localStorage.clear()
}
