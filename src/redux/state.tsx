
export type PostsType = {
    id: number
    likes: number
    text: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    side: string
    text: string
}

export type ProfilePageType = {
    posts: PostsType[]
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages:MessagesType[]
}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

export let state:StateType  = {
    ProfilePage: {
        posts: [
            {id: 1, likes: 12, text: 'Hello!'},
            {id: 2, likes: 3, text: 'Hello! Hello!'},
            {id: 3, likes: 22, text: 'Hello! Hello! Hello!'},
            {id: 4, likes: 6, text: 'Hello! Hello! Hello! Hello!'},
        ],
    },
    DialogsPage: {
        dialogs: [
            {id: 1, name: 'Ivan Ivanov'},
            {id: 2, name: 'Dima Petrov'},
            {id: 3, name: 'Sasha Sidorov'},
            {id: 4, name: 'Anna Del'},
            {id: 5, name: 'Mikkel'},
        ],
        messages: [
            {id: 1, side: 'left', text: 'Hi'},
            {id: 2, side: 'right', text: 'Hi!'},
            {id: 3, side: 'left', text: 'Vulputate imperdiet platea quis, dictum morbiex.'},
            {id: 4, side: 'left', text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'},
            {id: 5, side: 'right', text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'},
        ]
    }
}