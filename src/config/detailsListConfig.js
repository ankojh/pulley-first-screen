import UploadButton from "../components/uploadButton/UploadButton";

const LIST = [
  { 
    id:'founders',
    title: 'Add Founder Shares',
    description: 'Details on what founder shares are',
    isOpen: false,
    isDone: false,
    component: <UploadButton text={'Shares'} />,
    handler: ()=>{ console.log('talk to backend') }
  },
  {
    id: 'investments',
    title: 'Add Investments',
    description: 'What are Investments, when you would have/add them',
    isOpen: false,
    isDone: false,
    component: <UploadButton text={'Investments'} />,
    handler: () => { console.log('talk to backend') }
  },
  {
    id: 'equity',
    title: 'Add Equity Plans',
    description: 'Equity plan description',
    isOpen: false,
    isDone: false,
    component: <UploadButton text={'Equity'} />,
    handler: () => { console.log('talk to backend') }
  },
  {
    id: 'grants',
    title: 'Add Employee Grants',
    description: 'Employee grant description',
    isOpen: false,
    isDone: false,
    component: <UploadButton text={'Grants'} />,
    handler: () => { console.log('talk to backend') }
  },
  {
    id: 'review',
    title: 'Review Cap Table',
    description: 'All done? Invite your lawyer to review your cap table',
    isOpen: false,
    isDone: false,
    component: <UploadButton text={'Cap Table'} />,
    handler: () => { console.log('talk to backend') }
  }
  
]

export default LIST;