
export const QUESTIONS_LOADING = 'questions loading';
export const QUESTIONS_LOADED = 'questions loaded';
export const QUESTIONS_FAILED = 'questions failed';

export const MCQUESTION_ADD = 'add mc question';
export const MCQUESTION_DELETE = 'delete mc question';
export const MCEDIT_QUESTION = 'edit mc question';

export const SAQUESTION_ADD = 'add sa question';
export const SAQUESTION_DELETE = 'delete sa question';
//export const SAEDIT_QUESTION = 'edit sa question'
export const SA_SHOW = 'show sa question';
export const SAQUESTION_EDIT='edit sa question';

export type ShowAnswer = {
    type: typeof SA_SHOW,
    payload : {
        index: number,
    }
}


export type ShortAnswer = {
    id:number,
    quiz_id:number,
    question:string,
    answer:string,
    show?:boolean,
    createdAt:string,
}

export type MultipleChoice = {
    id:number,
    quiz_id:number,
    question:string,
    a1:string,
    a2:string|null,
    a3:string|null,
    a4:string|null,
    a5:string|null,
    answer: number
}

export type QuestionsLoading = {
    type: typeof QUESTIONS_LOADING,
}

export type QuestionsLoaded = {
    type: typeof QUESTIONS_LOADED,
    payload : {
        MC: MultipleChoice[],
        SA: ShortAnswer[]
    }
}

export type QuestionsFailed = {
    type: typeof QUESTIONS_FAILED,
}

export type AddMCQuestion = {
    type: typeof MCQUESTION_ADD,
    payload: {
        question : MultipleChoice,
    }
}

export type DeleteMCQuestion = {
    type: typeof SAQUESTION_DELETE
}

export type EditMCQuestion = {
    type: typeof MCEDIT_QUESTION,
    payload : {
        question: MultipleChoice,
    }
}

export type AddSAQuestion = {
    type: typeof SAQUESTION_ADD,
    payload: {
        question : ShortAnswer,
    }
}

export type DeleteSAQuestion = {
    type: typeof SAQUESTION_DELETE
}

export type EditSAQuestion = {
    type: typeof SAQUESTION_EDIT,
    payload: {
        question : ShortAnswer,
    }
}

export type AllQuestionTypes = EditSAQuestion | ShowAnswer| DeleteMCQuestion | DeleteSAQuestion | QuestionsLoading | QuestionsFailed| QuestionsLoaded|AddSAQuestion | AddMCQuestion;