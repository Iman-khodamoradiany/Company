import React from 'react'
import Text from '../../Atom/Text/Text'
import { useState } from 'react'
import Button from '../../Atom/Button/Button'

function ScoreBox() {
    const ArayScoreBox=[
        {id:1,Score:"1"},
        {id:2,Score:"2"},
        {id:3,Score:"3"},
        {id:4,Score:"4"},
        {id:5,Score:"5"},
    ]
    const [style,setstyle]=useState("1")
    
    

    return (
        <div className="w-full flex items-center justify-center gap-1 py-[10px] ">
            {ArayScoreBox.map((item)=>(
                <Button onClick={()=>setstyle(item.id)} className={style==item.id?"w-8 h-8 text-center  text-[#909090] rounded-[8px]  border-[#909090] border-[1px] bg-[#D9D9D9] ":"w-8 h-8 text-center  text-[#909090] rounded-[8px]  border-[#909090] border-[1px] "}>
                    <Text>{item.Score}</Text>
                </Button>
            ))}
        </div>
    )
}

export default ScoreBox
