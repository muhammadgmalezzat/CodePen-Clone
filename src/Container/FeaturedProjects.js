import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProjectCard from '../Components/ProjectCard';


const FeaturedProjects = () => {
  const projects = useSelector((state => state.projects?.projects));
  const [filtered, setfiltered] = useState(null);
  const searchTerm = useSelector((state => state.searchTerm?.searchTerm ? state.searchTerm?.searchTerm : ""));

  useEffect(() => {
    if (searchTerm?.length > 0) {
      setfiltered(
        projects?.filter(project => {
          const lowerCaseItem = project?.title.toLowerCase();
          return searchTerm.split("").every((letter) => lowerCaseItem.includes(letter));
        }));
    } else {
      setfiltered(null);
    }
  }, [projects, searchTerm])
  

  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {
        filtered ? <>
          {
            filtered && filtered.map((project, index) => (<ProjectCard key={project.id} project={project} index={index} />))
          }</> : <>
          {
            projects && projects.map((project, index) => (<ProjectCard key={project.id} project={project} index={index} />))
          }</>
      }
    </div>
  )
};


export default FeaturedProjects