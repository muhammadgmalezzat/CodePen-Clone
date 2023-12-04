import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Components/ProjectCard';


const YourWork = () => {
    const projects = useSelector((state => state.projects?.projects));
    const [filtered, setfiltered] = useState(null);
    const userId = useSelector((state => state.user.user.uid));

    useEffect(() => {
        if (userId?.length > 0) {
            setfiltered(
                projects?.filter(project => {
                    const projectId = project?.user.uid;
                    return projectId === userId;
                }));
        } else {
            setfiltered(null);
        }
    }, [])
  

    return (
        <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
            {
                filtered ? <>
                    {
                        filtered && filtered.map((project, index) => (<ProjectCard key={project.id} project={project} index={index} />))
                    }</> : <>
                    {
                            <div className='flex justify-center items-center text-primaryText text-4xl'>
                                No Projects Found
                        </div>
                    }</>
            }
        </div>
    )
};


export default YourWork;