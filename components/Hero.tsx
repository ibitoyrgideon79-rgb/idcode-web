import Image from "next/image"

export const Hero = () => {
    return (
        <section className="bg-[#F5F5F5] pt-16 sm:pt-28 lg:pt-16 pb-8 sm:pb-10">
            <div className="max-w-7xl lg:h-[67vh] mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-26 items-center">
                {/* Left Column */}
                <div className="max-w-xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-onSurface leading-tight">
                        Verification and Access Control that builds trust in a digital age
                    </h1>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-onSurfaceMuted leading-relaxed">
                        IDCODE Nigeria is a tech-driven company specializing in verification and access control solutions. Through our integration with NIMC, CAC, NAFDAC and other identity services, We help businesses stay ahead of growing fraud risk and impersonation threats.
                    </p>
                    <button className="mt-6 sm:mt-8 bg-[#4ADE80] text-black text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-3xl hover:bg-idcode-green-accent transition-colors font-medium">
                        Talk to an Expert
                    </button>
                </div>
                {/* Right Column */}
                <div className="flex items-center justify-center order-first lg:order-last">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image 
                            src={'/identity-hero.png'} 
                            alt="Hero Image" 
                            width={1000} 
                            height={1000} 
                            className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full object-cover" 
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
            <section className="bg-[#F2EAD3] py-4 sm:py-6 mt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-onSurfaceMuted font-poppins">
                        Trusted by leading startups and industry clients
                    </p>
                </div>
            </section>
        </section>
    )
}