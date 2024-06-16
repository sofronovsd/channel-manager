export default function getRandomIcon() {
  const availableIcons = [
    'fa-solid fa-phone',
    'fa-solid fa-envelope',
    'fa-brands fa-whatsapp',
    'fa-brands fa-telegram'
  ]
  return availableIcons[Math.floor(Math.random() * availableIcons.length)]
}
