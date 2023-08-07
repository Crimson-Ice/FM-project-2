function App() {
    return (
        <div className="flex h-full w-full bg-Cream px-4 py-8 xs:items-center xs:justify-center xs:p-0">
            <div className="flex h-[600px] min-w-[230px] flex-col rounded-lg bg-White xs:h-[400px] xs:w-[550px] xs:flex-row">
                <img
                    className="hidden rounded-l-lg xs:block xs:w-1/2"
                    src="image-product-desktop.jpg"
                    alt="product photo"
                />
                <img
                    className="block h-[300px] rounded-t-lg object-cover xs:hidden"
                    src="image-product-mobile.jpg"
                    alt="product photo"
                />
                <div className="flex h-full flex-col justify-between p-6">
                    <h4 className="text-[14px] font-medium tracking-[0.3em] text-Dark-grayish-blue">
                        PERFUME
                    </h4>
                    <h1 className="pr-8 font-[Fraunces] text-3xl font-bold leading-8">
                        Gabrielle Essence Eau De Parfum
                    </h1>
                    <p className="text-[14px] font-medium text-Dark-grayish-blue">
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>
                    <div className="flex flex-row items-center">
                        <h1 className="pr-4 font-[Fraunces] text-3xl text-Dark-cyan">
                            $149.99
                        </h1>
                        <span className="font-[Fraunces] text-sm text-Dark-grayish-blue line-through">
                            $169.99
                        </span>
                    </div>
                    <button className="flex flex-row items-center justify-center rounded-md bg-Dark-cyan py-3 hover:bg-Very-dark-blue">
                        <img
                            className="pr-2"
                            src="icon-cart.svg"
                            alt="cart logo"
                        />
                        <span className="text-White">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
