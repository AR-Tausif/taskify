import {RiCalendar2Line, RiArrowRightCircleFill, RiAtLine,  RiBarChartFill} from "react-icons/ri"
const people = [
  {
    name: 'Date Created :',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    icons: <RiCalendar2Line />,
  },
  {
    name: 'Person          :',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
    icons: <RiArrowRightCircleFill/>,
  },
  {
    name: 'Status:',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    icons: <RiAtLine/>,
  },
  {
    name: 'End :',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
    icons: <RiBarChartFill />,
  },
]


const DetailsTable = () => {
  return (
              <table className="table-auto w-full">
                  <tbody className="text-sm divide-y divide-gray-100">
                      {
                        people.map((person)=> (
                          <tr key={person.email}>
                          <td className="p-3 rounded-md whitespace-nowrap hover:bg-gray-100">
                              <div className="flex items-center">
                                  <div className="w-5 mt-2 h-5 overflow-hidden flex-shrink-0 mr-2 sm:mr-3">
                                      {/* <img className="rounded-sm" src={person.imageUrl} alt={person.name}/> */}
                                      {
                                        person.icons
                                      }
                                  </div>
                                  <div className="font-medium text-gray-800">{person.name}</div>
                              </div>
                          </td>
                          <td className="p-3 hover:bg-gray-100 rounded-md whitespace-nowrap">
                              <div className="text-left">{person.email}</div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500"></div>
                          </td>
                          <td className="p-4 whitespace-nowrap">
                              <div className="text-lg text-center"></div>
                          </td>
                      </tr>
                        ))
                      }
                  </tbody>
              </table>
  )
}

export default DetailsTable


