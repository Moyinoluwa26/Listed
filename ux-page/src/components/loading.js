import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center py-24">
            <div className="border-4 border-gray-200 rounded-full h-12 w-12 animate-spin"></div>
            <h1 className="mt-5">Loading...</h1>
        </div>
    );
};

export default Loading;
