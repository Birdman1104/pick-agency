const DEFAULT_DESCRIPTION =
  'A marketing strategy is a long-term, overarching plan for how a business will attract and retain customers by defining its value, identifying its target audience, understanding competitors, and choosing the right channels to communicate its message for sustained growth and competitive advantage. It acts as a blueprint, guiding specific marketing plans (like campaigns) and focusing efforts on key goals, such as increasing sales or brand awareness, by effectively positioning products and services in the market.'

export const tags = [
  { text: 'Telegram Ads', color: 'pink', description: DEFAULT_DESCRIPTION },
  { text: 'Digital Marketing & SMM', color: 'orange', description: DEFAULT_DESCRIPTION },
  { text: 'Creative Ideas', color: 'green', description: DEFAULT_DESCRIPTION },
  { text: 'Influencer Marketing', color: 'dark-orange', description: DEFAULT_DESCRIPTION },
  { text: 'Reel Making', color: 'lavender', description: DEFAULT_DESCRIPTION },
  { text: 'Full Marketing & Strategy', color: 'blue', description: DEFAULT_DESCRIPTION },
]

export const ROTATION_BASE = -15
export const ROTATION_STEP = 8

export const tagLayout = [
  { tagIndex: 0, box: 'left-top', classes: 'top' },
  { tagIndex: 1, box: 'left-top', classes: 'top-sec-text fit-content' },
  { tagIndex: 2, box: 'left-bottom' },
  { tagIndex: 3, box: 'right-bottom', classes: 'bottom-first-text' },
  { tagIndex: 4, box: 'right-bottom', classes: 'bottom-second-text sec-text' },
  { tagIndex: 5, box: 'right-top' },
]
