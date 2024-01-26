import { TeamCardProps } from "@/libs/type"
import TeamCard from "./teamcard"

const TeamData:TeamCardProps[]=[
    {
        name:"Nishchal Sangai",
        designaton:"App Developer",
        description:"Good Developer",
        socials:[]
    },
    {
        name:"Nishchal Sangai",
        designaton:"App Developer",
        description:"Good Developer",
        socials:[]
    },
    {
        name:"Nishchal Sangai",
        designaton:"App Developer",
        description:"Good Developer",
        socials:[]
    }
]
export default function Team(){
    return(
        <div id="team" className="flex flex-wrap gap-[32px] justify-center">
            {TeamData.map((item:TeamCardProps,index:number)=>{
                return(
                    <div key={index} className="flex-1 min-w-[250px] max-w-[300px]">
                        <TeamCard {...item}></TeamCard>
                    </div>
                )
            })}
        </div>
    )
}