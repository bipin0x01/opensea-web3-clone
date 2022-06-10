import { useAddress, useMetamask } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Header, Hero } from '../components'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
    wrapper: ` h-screen w-screen`,
    walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
    button: `border px-8 bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-3xl cursor-pointer text-white`,
    buttonWrapper: `flex flex-col justify-center items-center  h-screen `,
    details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const Home: NextPage = () => {
    const connectWithMetamask = useMetamask()
    const address = useAddress()

    const welcomeUser = (userName: string, toastHandler = toast) => {
        toastHandler.success(
            `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
            {
                style: {
                    background: '#04111d',
                    color: '#fff',
                },
            }
        )
    }

    useEffect(() => {
        // if address doesnot exist, return
        if (!address) return // create a sanity user
        ;(async () => {
            const userDoc = {
                _type: 'users',
                _id: address,
                userName: 'Kaji',
                walletAddress: address,
            }

            const result = await client.createIfNotExists(userDoc)

            welcomeUser(result.userName)
        })()
    }, [address])

    return (
        <div className={style.wrapper}>
            <Toaster position="bottom-center" reverseOrder={false} />
            {address ? (
                <>
                    <Header address={address} />
                    <Hero />
                </>
            ) : (
                <>
                    <div className={style.buttonWrapper}>
                        <button
                            className={style.button}
                            onClick={connectWithMetamask}
                        >
                            <a href="/connect">Connect to Wallet</a>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Home
