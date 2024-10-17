export interface ForumGroup {
  forums: RecentForumSummary[]
}

export interface RecentForumSummary extends ForumSignature {
  threadCount: number,
  postCount: number,
  latestThread: RecentThreadSummary,
  children: ForumSignature[]
}

export interface Tag {
  id: number,
  value: string,
  type: string
}

interface ForumSignature extends Signature {
  icon: string
}

export interface Signature {
  id: number,
  title: string
}
export interface LinkSignature extends Signature{
  url: string
}

interface RecentThreadSummary extends Signature {
  latestPost: RecentPostSummary
}

interface RecentPostSummary {
  id: number,
  createdAt: Date,
  editedAt: Date
}
