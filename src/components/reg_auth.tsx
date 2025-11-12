import { login, signup } from '@/app/auth/actions'


export default function LoginPage() {

    return (
        <div className="flex flex-col items-center justify-start w-full h-full pt-8 pb-10 px-4 overflow-y-auto">
            <div className="w-full max-w-4xl p-4 sm:p-6 md:p-10 bg-white shadow-lg rounded-lg">

                <div className="flex flex-wrap -mx-4">

                    {/* REGISTRATION COLUMN */}
                    <div className="w-full md:w-1/2 px-4 pb-8 md:pb-0 md:pr-6 border-b md:border-b-0">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">REGISTER</h2>

                        <form action={signup}>

                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="displayName" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="displayName"
                                    name="displayName"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-6">
                                <label htmlFor="register-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <button type="submit"
                                        className="bg-white border border-blue-950 text-blue-950 p-2 pl-5 pr-5 rounded-full font-semibold
                                    hover:bg-blue-950 hover:text-white transition">
                                    CREATE
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* LOGIN FORM */}
                    <div className="w-full md:w-1/2 px-4 pt-8 md:pt-0 md:pl-6 md:border-l">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center md:text-left">LOG-IN</h2>

                        <form action={login}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="login-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-center md:justify-end">
                                <button type="submit"
                                        className="bg-red-800 border border-white text-white p-2 pl-5 pr-5 rounded-full font-semibold
                                    hover:bg-white hover:border-red-800  hover:text-red-800 transition">
                                    LOG IN
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}