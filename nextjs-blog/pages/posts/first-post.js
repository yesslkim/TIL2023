import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout.js';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href='/'>Back to home</Link>
				<Image
					src='/images/profile.jpg' // Route of the image file
					height={144} // Desired size with correct aspect ratio
					width={144} // Desired size with correct aspect ratio
					alt='Your Name'
				/>
			</h2>
		</Layout>
	);
}
