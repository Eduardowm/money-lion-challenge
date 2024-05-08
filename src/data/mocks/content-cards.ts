import { ContentCard } from '../entities/ContentCardEntity'

export const mockRawContentCard = {
  id: 'abc-def-ghi',
  imageUri: '/images/mock.jpg',
  textData: {
    title: 'A mock title',
    subTitle: 'A mock subtitle',
    body: 'A mock content with a lot of text to fill the space',
    author: { first: 'Mock', last: 'author' },
  },
  metadata: {
    priority: 1,
    publishDate: '2021-01-01',
  },
  comments: [
    {
      text: 'A mock comment',
      author: 'Commenter 1',
      profilePic: '/images/mock.jpg',
      likes: 20,
    },
    {
      text: 'The second mock comment',
      author: 'Commenter 2',
      profilePic: '/images/mock2.jpg',
      likes: 50,
    },
  ],
}

export const mockContentCards: ContentCard[] = [
  {
    id: 'abc-def-ghi',
    title: 'A mock title',
    subtitle: 'A mock subtitle',
    content: 'A mock content with a lot of text to fill the space',
    priority: 1,
    author: {
      name: 'Mock author',
    },
    image: '/images/mock.jpg',
    comments: [
      {
        name: 'Commenter 1',
        image: '/images/mock.jpg',
        text: 'A mock comment',
        likes: 20,
      },
      {
        name: 'Commenter 2',
        image: '/images/mock2.jpg',
        text: 'The second mock comment',
        likes: 50,
      },
    ],
  },
  {
    id: 'ihg-fed-cba',
    title: 'An alternative mock title',
    subtitle: 'An alternative mock subtitle',
    content: 'An alternative mock content with a lot of text to fill the space',
    priority: 1,
    author: {
      name: 'An alternative mock author',
    },
    image: '/images/mock.jpg',
    comments: [
      {
        name: 'Alternative commenter 1',
        image: '/images/mock.jpg',
        text: 'An alternative mock comment',
        likes: 20,
      },
    ],
  },
]
