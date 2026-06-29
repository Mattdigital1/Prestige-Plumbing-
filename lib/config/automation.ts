// SMS and email automation templates for GoHighLevel or other CRM
// Use these templates when setting up automated workflows

export const AUTOMATION_TEMPLATES = {
  missedCall: {
    name: 'Missed Call Text',
    channel: 'sms',
    message:
      'Hi, this is Prestige Plumbing LLC. Sorry we missed your call. How can we help today?',
  },
  newLeadReply: {
    name: 'New Lead Auto-Reply',
    channel: 'sms',
    message:
      'Hi {{contact.first_name}}, this is Prestige Plumbing LLC. Thanks for reaching out. What plumbing service can we help you with today?',
  },
  reviewRequest: {
    name: 'Review Request',
    channel: 'sms',
    // TODO: Replace GOOGLE_REVIEW_LINK with the actual Google Business Profile review URL
    message:
      'Hi {{contact.first_name}}, thanks for choosing Prestige Plumbing LLC. If you were happy with your service, would you mind leaving us a quick Google review? GOOGLE_REVIEW_LINK',
  },
} as const
