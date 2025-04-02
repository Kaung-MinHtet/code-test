import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Head, router } from "@inertiajs/react";
import React from "react";

const ProposalStatus = ({ status }) => {
    return (
        <>
            <Head title="Proposal status" />
            <WebsiteLayout>
                <div className="bg-white w-full grid place-items-center pt-[200px]">
                    <div className="border rounded-lg shadow-lg  mx-auto mb-[50px]">
                        {/* Header */}
                        <div className="bg-red-700 text-white px-6 py-3 font-bold text-lg text-center">
                            { status == "success" ?  "Success!" : status }
                        </div>

                        {/* Message */}
                        <div className="bg-white p-6 text-center">
                            <p className="text-gray-700 text-lg font-medium">
                                🎉 Thank you for your purchase!
                            </p>
                            <p className="text-gray-600 mt-2">
                                Your transaction has been successfully completed.
                            </p>

                            {/* Go Home Button */}
                            <button
                                onClick={() => router.get('/')}
                                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
                            >
                                Go Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </WebsiteLayout>
        </>
    );
};

export default ProposalStatus;
