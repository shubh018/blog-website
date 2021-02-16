import React from "react";
import theme from "theme";
import { Theme, Link, Text, Em, Span, List, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Intro | Onboarding Quarkly
			</title>
			<meta name={"description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<meta property={"og:title"} content={"Intro | Onboarding Quarkly"} />
			<meta property={"og:description"} content={"At this stage, you are going to get to know the Quarkly interface and main features.\n"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text
				margin="0px 0 0px 0"
				text-align="left"
				font="--headline2"
				md-font="--headline3"
				color="#ff8547"
			>
				Something New
			</Text>
			<Text color="rgb(198, 205, 207)" margin="0 0px 16px 0px">
				<Em>
					Read. Know. Enjoy
				</Em>
			</Text>
			<Box
				width="100%"
				height="50px"
				margin="0px 0px 0px 0"
				color="#ffffff"
				background="#ff8457"
			>
				<List
					position="fixed"
					bottom="9px"
					list-style-type="none"
					as="ul"
					display="flex"
					padding="0px 0px 0px 0px"
					height="50px"
				>
					<Text
						margin="-18px 0px 16px 0"
						padding="16px 25.6px 16px 25.6px"
						position="relative"
						height="20px"
						top="17.5px"
						font="bold 15px --fontFamily-googleVarela"
					>
						<Span
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Bizarre
						</Span>
					</Text>
					<Text
						position="relative"
						top="17.5px"
						padding="16px 25.6px 16px 25.6px"
						font="bold 15px --fontFamily-googleVarela"
						margin="-18px 0px 16px 0px"
					>
						Science
					</Text>
					<Text
						position="relative"
						top="17.5px"
						padding="16px 25.6px 16px 25.6px"
						font="bold 15px --fontFamily-googleVarela"
						margin="-18px 0px 16px 0px"
					>
						History
					</Text>
					<Text
						position="relative"
						top="17px"
						padding="16px 25.6px 16px 25.6px"
						font="bold 15px --fontFamily-googleVarela"
						margin="-17px 0px 16px 0px"
						cursor="pointer"
					>
						Reviews
					</Text>
				</List>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});