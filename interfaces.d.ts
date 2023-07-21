
export interface IUser {
   id: string;
   name: string;
   img: string;
   email: string;
   phone: string;
   linkedin: string;
   github: string;
   summary: string;
   projects: [IProject];
   education: [IEducation];
   experience: [IExperience];
   skills: [ISkill];
}


export interface IProject {
   id: string;
   title: string;
   img: string;
   deployedURL: string;
   githubURL: string;
   description: string;
   skills: [ISkill];
   userId: string;
   user: IUser;
}

export interface IExperience {
   id: string;
   title: string;
   img: string;
   company: string;
   start?: string;
   end?: string;
   description: [string];
   skills: [ISkill];
   userId: string;
   user: IUser;
}
export interface IEducation {
   id: string;
   institution: string;
   img: string;
   program: string;
   start?: string;
   end?: string;
   courses: [ICourse];
   skills: [ISkill];
   userId: string;
   user: IUser;
}

export interface ICourse {
   id: string;
   title: string;
   skills: [ISkill];
   grade?: string;
   educationId: string;
   education: IEducation;
}

export interface ISkill {
   id: string;
   name: string;
   img: string;
   projects?: [IProject];
   education?: [IEducation];
   experience?: [IExperience];
   courses?: [ICourse];
   tags: [ITag];
   users: [IUser]
}

export interface ITag {
   id: string;
   name: string;
   skills: [ISkill]
}
