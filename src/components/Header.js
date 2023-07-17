
export const Header = ({ heading, subHeading }) => {
    return (
        <section>
            <p className='text-4xl font-bold  text-center py-2'>{heading}</p>
            <p className='text-xl font-light text-center'>{subHeading}</p>
        </section>
    )
}
