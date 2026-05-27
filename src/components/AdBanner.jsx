import { useEffect } from 'react'

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7662615793119073"
            data-ad-slot="6483526175"
            data-ad-format="auto"
            data-full-width-responsive="true"
        />
    )
}

export default AdBanner