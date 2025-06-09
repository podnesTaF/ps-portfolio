import { Button } from '@mui/material'

function Sidebar() {
  return (
    <div className="flex-1 md:border-r border-r-primary flex justify-end">
      <div className='flex flex-col gap-4 max-w-96 p-5 w-full'>
        <div>
          <h3 className="mb-3">Supportive links</h3>
          <div className="flex flex-col gap-2">
            <Button
              variant={"contained"}
              className="!rounded-none !font-semibold !text-white"
              LinkComponent={"a"}
              href={'/documents/CV_Oleksii.pdf'}
              target="_blank"
              download={true}
            >
              Project Planning
            </Button>
            <Button
              variant={"contained"}
              className="!rounded-none !font-semibold !text-white"
              LinkComponent={"a"}
              href={'/documents/CV_Oleksii.pdf'}
              target="_blank"
              download={true}
            >
              Realisation Document
            </Button>
            <Button
              variant={"contained"}
              className="!rounded-none !font-semibold !text-white"
              LinkComponent={"a"}
              href={'/documents/CV_Oleksii.pdf'}
              target="_blank"
              download={true}
            >
              Reflection
            </Button>
          </div>
        </div>
        <div>
          <h3 className="mb-3">Role</h3>
          <p className="text-lg font-bold text-white">Frontend Engineer</p>
        </div>
        <div>
          <h3 className="mb-3">Main Tech Stack</h3>
          <ul className="text-white">
            <li>
              TypeScript
            </li>
            <li>
              React
            </li>
            <li>
              Syncfusion
            </li>
            <li>
              Penpot / Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar