let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi,how are you?", likesCount: 12 },
            { id: 2, message: "It/'s my first post", likesCount: 11 },
            { id: 3, message: "It/'s my first post", likesCount: 11 }
        ]
    },
    dialogsPage: {
        messages: [
            { id: 1, name: 'Myron' },
            { id: 2, name: 'Danya' },
            { id: 3, name: 'Zoriana' },
            { id: 4, name: 'Patik' },
            { id: 5, name: 'Ryba' }
        ],
        dialogs: [
            { id: 1, message: 'We just released a massive, free Python Machine Learning course focused on TensorFlow 2.0.' },
            { id: 2, message: 'How to avoid getting your password cracked.' },
            { id: 3, message: 'The JavaScript Beginner\'s Handbook - 2020 Edition.' },
            { id: 4, message: 'Quote of the Week: “Optimism is an occupational hazard of programming.' }
        ]

    }

}

export default state;