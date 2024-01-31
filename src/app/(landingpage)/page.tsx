import BannerSignup from '@/components/organism/BannerSignUp'
import Category from '@/components/organism/Category'
import Clients from '@/components/organism/Clients'
import FeaturedJobs from '@/components/organism/FeaturedJobs'
import Hero from '@/components/organism/Hero'
import LatestJob from '@/components/organism/LatestJob'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import pattern from '../../public/images/pattern.png'

export default function Home() {
  return (
    <>
    <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
				<Image
					src="/images/pattern.png"
					alt="/images/pattern.png"
					fill
				/>
			</div>
			<div className="px-32 mb-10">
				<Hero />
				<Clients />
				<Category />
				<BannerSignup />
				<FeaturedJobs />
				<LatestJob />
			</div>
    
    </>
  )
}
