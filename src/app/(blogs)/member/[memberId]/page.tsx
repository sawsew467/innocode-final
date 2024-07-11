
import { BlogsModule } from '@/components/modules/Blog';
import React from 'react'

type TProps = {
    params: {
        memberId: string;
    }
}

function StudyRoom({params}:TProps) {
    return (
      <BlogsModule/>
    )
}

export default StudyRoom