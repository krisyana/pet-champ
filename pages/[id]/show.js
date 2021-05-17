import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../utils/dbConnect'
import Pet from '../../models/Pet'


const showPet = ({ pet }) => {

}

export async function getServerSideProps({ params }) {
    await dbConnect()

    const pet = await Pet.findById(params.id).lean()
    pet._id = pet._id.toString()

    return { props: { pet } }
}

export default showPet