import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: "midudev",
        name: 'Midu Díaz',
        isFollowing: true
    },
    {
        userName: "imahh17",
        name: 'Imanol Arenaza',
        isFollowing: false
    },
]
export function App () {
    return(
        <section className='app'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                    key={userName}
                    userName={userName} 
                    initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
        
    )
}