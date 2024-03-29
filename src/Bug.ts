export interface Bug{
    id: string;
    description: string;
    priority: BugPriority 
}

export enum BugPriority{
   LOW ='Low',
   MEDIUM='Medium',
   HIGH='High' 
}