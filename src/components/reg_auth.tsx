import React, { useState, FormEvent } from 'react';

const Reg_Auth_Dialog = () => {
    const [loginUsername, setLoginUsername] = useState<string>('');
    const [loginPassword, setLoginPassword] = useState<string>('');

    const [registerName, setRegisterName] = useState<string>('');
    const [registerEmail, setRegisterEmail] = useState<string>('');
    const [registerPassword, setRegisterPassword] = useState<string>('');

    const handleLogin = (e: FormEvent) => {
        //Placeholder for me to add logic with backend.
        setRegisterName('');
        setLoginUsername('');
        setLoginPassword('');
    };

    const handleRegister = (e: FormEvent) => {
        //Placeholder for me to add logic with backend.

        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
    };

    return (
        <div className="flex items-start justify-center min-h-screen px-4 pb-10">
            <div className="w-full max-w-4xl p-10 bg-white overflow-hidden">

                {/* 2 CCOLUMN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* REGISTRATION COLUMN */}
                    <div className="p-6 md:p-2 md:pr-10">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">REGISTER</h2>

                        {/* Registration Form */}
                        <form onSubmit={handleRegister}>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                                <input
                                    type="name"
                                    id="name"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    value={registerName}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    value={registerEmail}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-6">
                                <label htmlFor="register-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit"
                                    className="bg-white border border-blue-950 text-blue-950 p-2 pl-5 pr-5 rounded-full font-semibold
                                    hover:bg-blue-950 hover:text-white transition">
                                CREATE
                            </button>
                            </div>
                        </form>
                    </div>
                    {/* LOGIN FORM */}
                    <div className="p-6 md:p-2 md:pl-10 border-l">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">LOG-IN</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                                <input
                                    type="text"
                                    id="username"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    value={loginUsername}
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="login-password" className="block text-sm font-medium mb-1 text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    className="w-full p-1 border border-gray-300 rounded"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
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
    );
};

export default Reg_Auth_Dialog;
