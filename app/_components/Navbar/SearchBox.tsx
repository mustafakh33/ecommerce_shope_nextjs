import React from 'react'
import { SearchIcon } from 'lucide-react'
import { Dialog ,DialogTrigger ,DialogContent ,DialogTitle  } from '@/components/ui/dialog'

const SearchBox = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={"pointer"} />
        </DialogTrigger>
        <DialogContent>
        <DialogTitle>Search</DialogTitle>
            <form>
                <input type="text" placeholder='Search Product' className='block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none' />
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default SearchBox