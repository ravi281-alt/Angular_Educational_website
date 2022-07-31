export interface Master {
    course_id:number,
    course_name:string,
    duration:string,
    mode_training:string,
    fees:number,
    img:string,
    training : number,
    hiring : number,
    salary: number,
    student_trained : number,
    case_studies :cs[]
}
interface cs{
    cs:string
}
export interface posts{
    course_id:number,
    course_name:string,
    Duration:string,
    mode_training:string,
    Fees:number,
    img:string,
    training : number,
    hiring : number,
    salary: number,
    student_trained : number,
    case_studies :cs[]
}

export interface Course{
    Masters:Master[],
    Post:posts[]
}