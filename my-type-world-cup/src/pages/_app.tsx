import MetaTags from "@/components/MetaTag";
import Header from "@/components/all/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";
import * as gtag from "../lib/gtag/gtag"; // 여기서 gtag는 위에서 정의한 Google Analytics 함수를 포함한 파일입니다.

const swrConfig = {
	revalidateOnFocus: false,
	revalidateOnReconnect: false
};

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url);
		};

		// 라우터 이벤트에 이벤트 리스너를 붙입니다.
		router.events.on("routeChangeComplete", handleRouteChange);

		// 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<div className="bg-hover flex justify-center items-center mt-[-1px] w-auto overflow-hidden">
				<Head>
					<title>이상형 월드컵</title>
					<link rel="icon" href="/icon/trophy.svg" />
					<link rel="mask-icon" href="/icon/trophy.svg" color="#000000" />
					<MetaTags />
					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

           gtag('config', 'G-2MHY2KXJCP');
            `
						}}
					/>
				</Head>
				<Script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=G-2MHY2KXJCP`}
				/>
				<div className="my-auto h-0 lg:h-auto mt-40 mr-4 hidden lg:block">
					<p className="mt-4 text-2xl text-left">나의 마음을 확인하세요</p>
					<h2 className="text-left text-5xl font-bold text-[#117FFA]">
						이상형 월드컵
					</h2>
				</div>
				<RecoilRoot>
					<div className="bg-white max-w-[480px] w-full sm:min-w-[480px] mx-auto sm:mx-20 shadow-lg h-5/6">
						<Header />
						<div className="-mt-[63px]">
							<SWRConfig value={swrConfig}>
								<Component {...pageProps} />
							</SWRConfig>
						</div>
					</div>
				</RecoilRoot>
			</div>
		</>
	);
}

export default App;
//onTouchStart 기억할 것
