import React from 'react';
import error from '../../assets/images/error.png';


class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }  

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex flex-col justify-center items-center'>
                    <img className="w-1/3 h-1/3" src={error} alt="" />
                    <p>مشکلی به وجود آمده، لطفا دوباره تلاش کنید</p>
                    <a className='pt-3 cursor-pointer text-blue-700 border-b-2 border-blue-700'
                        href="/">بازگشت به صفحه اصلی</a>
                </div>
            );
        }
        return this.props.children;
    }   // end render
}

export default ErrorBoundary;