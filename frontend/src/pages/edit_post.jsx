import React from 'react'
import EditForm from '../components/FormEdit'
import TabMenu from '../components/TabMenu'
import Appฺbar from '../components/Appbar'
import Footers from '../components/Footer'

export default function edit_post() {
  
  return (
    <>
    <div class=" bg-gradient-to-b from-purple-600 to-blue-600 min-h-screen">
      <div>
        <div class="pl-[12rem] pr-[12rem] pb-[5rem]">
          <div class="shadow-2xl ">
            <Appฺbar />
            <TabMenu />
            <div class="flex flex-row bg-white p-5">
              <div class="w-full">
                  <EditForm  />
              </div>
            </div>
            <div>
              <Footers />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
