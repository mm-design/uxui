import Image from 'next/image';
import googleMeet from '../public/google-meet.png';
import Link from 'next/link';

function ReserveFreeCallCTA() {
    return (
        <Link href="" target="_blank" className="inline-block">
            <div className="relative w-[140px] h-[140px]">
                <div className="absolute w-[90px] h-[90px] left-[50%] top-[50%] ml-[-45px] mt-[-45px] rounded-full bg-gradient-to-br from-[#F9F9F9] to-[#CFDAE9]"></div>
                <Image src={googleMeet} width={57} height={46} alt="Google Meet logo" className="absolute left-[50%] top-[50%] ml-[-28px] mt-[-23px]"/>

                <div className="absolute left-[50%] top-[50%] ml-[-70px] mt-[-70px]">
                    <svg width="140" height="139" viewBox="0 0 140 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.92 11.76L73.2 9.81L74.75 10.03L75.89 2.17L74.34 1.95L74.62 0L80.67 0.88C81.39 0.98 81.99 1.19 82.49 1.51C82.99 1.83 83.35 2.23 83.58 2.72C83.81 3.21 83.88 3.76 83.8 4.37L83.78 4.54C83.7 5.08 83.54 5.5 83.29 5.82C83.04 6.14 82.76 6.36 82.46 6.51C82.16 6.65 81.88 6.75 81.62 6.79L81.58 7.09C81.82 7.19 82.07 7.36 82.33 7.59C82.59 7.82 82.8 8.12 82.96 8.5C83.12 8.88 83.16 9.35 83.07 9.91L83.05 10.08C82.96 10.73 82.72 11.27 82.35 11.69C81.98 12.11 81.51 12.41 80.94 12.58C80.37 12.75 79.73 12.78 79.03 12.68L72.91 11.8L72.92 11.76ZM76.98 10.29L79.06 10.59C79.54 10.66 79.95 10.59 80.28 10.41C80.61 10.22 80.81 9.9 80.87 9.47L80.89 9.3C80.95 8.86 80.86 8.51 80.6 8.23C80.34 7.95 79.97 7.78 79.48 7.71L77.4 7.41L76.98 10.3V10.29ZM77.69 5.38L79.74 5.68C80.2 5.75 80.59 5.68 80.93 5.49C81.26 5.3 81.46 4.99 81.52 4.58L81.54 4.41C81.6 3.98 81.5 3.64 81.25 3.36C81 3.08 80.63 2.92 80.16 2.85L78.11 2.55L77.7 5.37L77.69 5.38Z" fill="url(#paint0_linear_188_550)"/>
                        <path d="M88.98 15.53C87.58 15.02 86.6 14.23 86.05 13.15C85.5 12.08 85.49 10.82 86.01 9.39L86.98 6.71C87.5 5.27 88.32 4.32 89.43 3.85C90.54 3.38 91.8 3.4 93.2 3.91C94.6 4.42 95.58 5.21 96.13 6.29C96.68 7.36 96.69 8.62 96.17 10.05L95.2 12.73C94.68 14.17 93.86 15.12 92.75 15.59C91.64 16.06 90.38 16.04 88.98 15.53ZM89.66 13.65C90.45 13.94 91.14 13.93 91.74 13.63C92.34 13.33 92.78 12.8 93.06 12.03L94.08 9.22C94.36 8.45 94.36 7.76 94.09 7.15C93.82 6.54 93.29 6.08 92.51 5.8C91.73 5.52 91.04 5.53 90.43 5.82C89.82 6.12 89.38 6.65 89.1 7.41L88.08 10.22C87.8 10.99 87.8 11.68 88.08 12.3C88.35 12.92 88.88 13.37 89.66 13.65Z" fill="url(#paint1_linear_188_550)"/>
                        <path d="M99.51 20.64C98.24 19.85 97.44 18.88 97.13 17.72C96.81 16.56 97.05 15.33 97.86 14.03L99.36 11.61C100.16 10.31 101.16 9.54 102.34 9.31C103.52 9.08 104.75 9.35 106.02 10.14C107.29 10.93 108.08 11.9 108.4 13.06C108.72 14.22 108.48 15.45 107.67 16.75L106.17 19.17C105.37 20.47 104.37 21.24 103.19 21.47C102.01 21.7 100.78 21.43 99.51 20.64ZM100.56 18.94C101.27 19.38 101.95 19.52 102.6 19.35C103.25 19.18 103.79 18.75 104.22 18.06L105.79 15.52C106.22 14.83 106.36 14.15 106.23 13.49C106.09 12.83 105.67 12.28 104.95 11.84C104.25 11.41 103.57 11.27 102.91 11.44C102.25 11.61 101.71 12.04 101.28 12.73L99.71 15.27C99.28 15.96 99.14 16.64 99.28 17.3C99.42 17.96 99.85 18.51 100.55 18.94H100.56Z" fill="url(#paint2_linear_188_550)"/>
                        <path d="M105.61 24.49L113.73 15.81L115.37 17.34L112.15 20.79L112.37 21L118.41 20.19L120.51 22.15L112.89 23.04L112.52 30.94L110.36 28.92L110.78 22.71L110.56 22.5L107.27 26.02L105.63 24.49H105.61Z" fill="url(#paint3_linear_188_550)"/>
                        <path d="M116.54 36.1L126.76 30.03L128.94 33.69L121.24 41.01L121.4 41.27L130.3 35.98L131.43 37.88L121.21 43.95L119.03 40.29L126.73 32.97L126.57 32.71L117.67 38L116.54 36.1Z" fill="url(#paint4_linear_188_550)"/>
                        <path d="M123.58 50.75C123.09 49.34 123.1 48.08 123.58 46.98C124.06 45.88 125.04 45.08 126.48 44.58L129.18 43.65C130.62 43.15 131.88 43.19 132.94 43.76C134 44.33 134.78 45.32 135.26 46.73C135.74 48.14 135.74 49.4 135.26 50.5C134.78 51.6 133.8 52.4 132.36 52.9L129.66 53.83C128.21 54.33 126.96 54.29 125.9 53.72C124.84 53.15 124.06 52.16 123.58 50.75ZM125.47 50.1C125.74 50.89 126.18 51.43 126.79 51.71C127.4 51.99 128.09 52 128.86 51.73L131.69 50.76C132.46 50.49 133 50.06 133.31 49.47C133.62 48.88 133.64 48.18 133.37 47.39C133.1 46.61 132.66 46.08 132.05 45.79C131.44 45.5 130.75 45.49 129.97 45.76L127.14 46.73C126.37 46.99 125.83 47.43 125.52 48.03C125.21 48.63 125.19 49.32 125.46 50.11L125.47 50.1Z" fill="url(#paint5_linear_188_550)"/>
                        <path d="M126.14 58.41L137.83 55.75L138.04 57.96L127.87 60.07L127.9 60.37L138.32 60.9L138.68 64.75L128.54 67.2L128.57 67.5L138.95 67.69L139.16 69.9L127.18 69.45L126.82 65.6L137.19 63.1L137.16 62.8L126.5 62.26L126.14 58.41Z" fill="url(#paint6_linear_188_550)"/>
                        <path d="M128.14 85.88C128.26 85.44 128.48 85.08 128.78 84.78C129.08 84.48 129.45 84.28 129.87 84.17C130.29 84.06 130.72 84.07 131.17 84.19C131.61 84.31 131.97 84.52 132.27 84.82C132.57 85.12 132.77 85.48 132.88 85.9C132.99 86.32 132.98 86.75 132.85 87.2C132.72 87.66 132.51 88.03 132.21 88.33C131.91 88.63 131.55 88.83 131.14 88.93C130.73 89.03 130.3 89.02 129.84 88.89C129.38 88.76 129.01 88.54 128.71 88.23C128.42 87.92 128.22 87.55 128.12 87.14C128.02 86.73 128.03 86.3 128.15 85.88H128.14Z" fill="url(#paint7_linear_188_550)"/>
                        <path d="M119.28 98.41L120.89 99.54L119.99 100.82L126.49 105.39L127.39 104.11L129 105.24L125.49 110.24C125.07 110.83 124.61 111.28 124.1 111.58C123.59 111.88 123.07 112.02 122.53 112.01C121.99 112 121.47 111.81 120.96 111.46L120.82 111.36C120.37 111.05 120.07 110.71 119.9 110.34C119.73 109.97 119.66 109.62 119.66 109.29C119.66 108.96 119.71 108.66 119.79 108.41L119.54 108.23C119.34 108.4 119.08 108.54 118.76 108.68C118.44 108.81 118.07 108.86 117.67 108.83C117.26 108.8 116.83 108.62 116.36 108.3L116.22 108.2C115.68 107.82 115.31 107.37 115.1 106.85C114.89 106.33 114.84 105.78 114.95 105.2C115.05 104.62 115.31 104.03 115.72 103.45L119.27 98.39L119.28 98.41ZM118.76 102.69L117.55 104.41C117.27 104.81 117.14 105.2 117.16 105.58C117.18 105.96 117.37 106.28 117.73 106.53L117.87 106.63C118.23 106.88 118.59 106.96 118.96 106.85C119.33 106.74 119.65 106.49 119.93 106.08L121.14 104.36L118.75 102.68L118.76 102.69ZM122.82 105.54L121.63 107.23C121.36 107.61 121.24 107.99 121.26 108.37C121.28 108.75 121.46 109.06 121.81 109.3L121.95 109.4C122.3 109.65 122.66 109.72 123.02 109.61C123.38 109.5 123.69 109.25 123.97 108.86L125.16 107.17L122.83 105.53L122.82 105.54Z" fill="url(#paint8_linear_188_550)"/>
                        <path d="M108.67 111.05C109.76 110.03 110.9 109.51 112.11 109.5C113.32 109.5 114.44 110.04 115.49 111.16L117.45 113.24C118.5 114.35 118.98 115.51 118.9 116.71C118.82 117.91 118.24 119.03 117.15 120.05C116.06 121.07 114.92 121.59 113.71 121.6C112.5 121.61 111.38 121.06 110.33 119.94L108.37 117.86C107.32 116.75 106.84 115.59 106.92 114.39C107 113.19 107.58 112.07 108.67 111.05ZM110.04 112.51C109.43 113.08 109.12 113.71 109.12 114.38C109.12 115.05 109.39 115.68 109.95 116.28L112 118.45C112.56 119.04 113.17 119.36 113.85 119.39C114.52 119.43 115.16 119.16 115.77 118.58C116.37 118.01 116.68 117.39 116.68 116.72C116.68 116.04 116.41 115.41 115.85 114.82L113.8 112.65C113.24 112.06 112.62 111.74 111.95 111.71C111.28 111.68 110.64 111.95 110.03 112.51H110.04Z" fill="url(#paint9_linear_188_550)"/>
                        <path d="M99.36 118.17C100.63 117.39 101.86 117.11 103.04 117.35C104.22 117.59 105.21 118.36 106.01 119.66L107.5 122.09C108.3 123.39 108.54 124.62 108.22 125.78C107.9 126.94 107.1 127.91 105.83 128.7C104.56 129.48 103.33 129.75 102.15 129.52C100.97 129.29 99.98 128.51 99.18 127.21L97.69 124.78C96.89 123.48 96.65 122.25 96.97 121.09C97.29 119.93 98.09 118.96 99.36 118.17ZM100.41 119.88C99.7 120.32 99.27 120.87 99.13 121.52C98.99 122.18 99.13 122.85 99.56 123.55L101.13 126.09C101.56 126.78 102.09 127.22 102.75 127.39C103.4 127.56 104.08 127.43 104.8 126.99C105.5 126.56 105.93 126.01 106.07 125.35C106.21 124.69 106.07 124.01 105.65 123.32L104.09 120.78C103.66 120.09 103.12 119.65 102.47 119.49C101.81 119.32 101.14 119.45 100.43 119.89L100.41 119.88Z" fill="url(#paint10_linear_188_550)"/>
                        <path d="M93.18 121.9L97.28 133.05L95.18 133.82L93.55 129.39L93.26 129.5L91.27 135.26L88.58 136.25L91.21 129.04L84.32 125.15L87.09 124.13L92.45 127.3L92.74 127.19L91.08 122.66L93.18 121.89V121.9Z" fill="url(#paint11_linear_188_550)"/>
                        <path d="M77.89 126.42L78.69 138.28L74.44 138.57L71.39 128.4L71.09 128.42L71.79 138.75L69.59 138.9L68.79 127.04L73.04 126.75L76.09 136.92L76.39 136.9L75.69 126.57L77.89 126.42Z" fill="url(#paint12_linear_188_550)"/>
                        <path d="M61.65 126.1C63.13 126.3 64.25 126.87 65.02 127.8C65.78 128.73 66.06 129.95 65.86 131.47L65.48 134.3C65.27 135.81 64.68 136.92 63.69 137.61C62.7 138.3 61.47 138.55 59.99 138.35C58.51 138.15 57.39 137.58 56.62 136.65C55.86 135.72 55.58 134.5 55.78 132.98L56.16 130.15C56.37 128.64 56.96 127.53 57.95 126.84C58.93 126.15 60.17 125.9 61.65 126.1ZM61.38 128.08C60.55 127.97 59.87 128.12 59.35 128.54C58.83 128.96 58.51 129.57 58.4 130.38L58 133.34C57.89 134.15 58.03 134.82 58.43 135.37C58.82 135.91 59.44 136.24 60.27 136.36C61.09 136.47 61.76 136.32 62.29 135.9C62.82 135.48 63.14 134.87 63.25 134.06L63.65 131.1C63.76 130.29 63.61 129.62 63.21 129.07C62.81 128.53 62.2 128.2 61.38 128.09V128.08Z" fill="url(#paint13_linear_188_550)"/>
                        <path d="M53.66 124.96L50.79 136.6L48.72 135.79L51.4 125.76L51.12 125.65L45.97 134.72L42.36 133.31L44.73 123.15L44.45 123.04L39.62 132.23L37.55 131.42L43.33 120.92L46.93 122.33L44.51 132.72L44.79 132.83L50.06 123.55L53.67 124.96H53.66Z" fill="url(#paint14_linear_188_550)"/>
                        <path d="M28.23 114.36C28.56 114.67 28.79 115.02 28.92 115.43C29.05 115.84 29.06 116.25 28.97 116.68C28.88 117.11 28.68 117.49 28.37 117.83C28.06 118.16 27.71 118.4 27.31 118.53C26.91 118.66 26.5 118.68 26.07 118.58C25.64 118.48 25.27 118.28 24.93 117.97C24.58 117.65 24.34 117.29 24.21 116.88C24.08 116.48 24.06 116.07 24.16 115.66C24.25 115.25 24.46 114.87 24.78 114.52C25.1 114.17 25.47 113.93 25.88 113.81C26.29 113.69 26.71 113.68 27.12 113.77C27.53 113.86 27.91 114.07 28.23 114.36Z" fill="url(#paint15_linear_188_550)"/>
                        <path d="M21.02 100.82L19.29 101.75L18.55 100.37L11.55 104.13L12.29 105.51L10.56 106.44L7.67 101.06C7.33 100.42 7.14 99.81 7.1 99.22C7.06 98.63 7.17 98.1 7.42 97.62C7.67 97.14 8.07 96.76 8.62 96.46L8.77 96.38C9.25 96.12 9.69 96 10.09 96.02C10.49 96.04 10.84 96.12 11.13 96.28C11.43 96.44 11.67 96.61 11.85 96.79L12.12 96.65C12.06 96.4 12.05 96.1 12.07 95.75C12.1 95.4 12.21 95.05 12.42 94.7C12.63 94.35 12.98 94.04 13.48 93.77L13.63 93.69C14.21 93.38 14.78 93.25 15.33 93.29C15.89 93.34 16.41 93.54 16.88 93.89C17.35 94.24 17.76 94.74 18.1 95.37L21.02 100.81V100.82ZM13.06 100.78L12.08 98.96C11.86 98.55 11.58 98.27 11.22 98.12C10.87 97.97 10.51 97.99 10.14 98.19L9.99 98.27C9.61 98.47 9.39 98.76 9.32 99.13C9.26 99.5 9.34 99.89 9.56 100.31L10.54 102.14L13.05 100.79L13.06 100.78ZM17.43 98.43L16.43 96.58C16.2 96.15 15.91 95.86 15.56 95.71C15.21 95.56 14.84 95.59 14.45 95.8L14.3 95.88C13.91 96.09 13.68 96.38 13.61 96.75C13.54 97.12 13.62 97.53 13.86 97.97L14.86 99.82L17.43 98.44V98.43Z" fill="url(#paint16_linear_188_550)"/>
                        <path d="M14.51 85.67C14.93 87.1 14.88 88.36 14.34 89.44C13.8 90.52 12.8 91.28 11.34 91.71L8.61 92.52C7.15 92.95 5.89 92.87 4.86 92.25C3.82 91.64 3.09 90.61 2.67 89.18C2.25 87.75 2.3 86.49 2.84 85.41C3.38 84.33 4.38 83.57 5.84 83.14L8.57 82.33C10.03 81.9 11.29 81.99 12.32 82.6C13.36 83.21 14.09 84.24 14.51 85.67ZM12.59 86.24C12.35 85.44 11.93 84.88 11.34 84.58C10.75 84.28 10.05 84.24 9.27 84.47L6.41 85.32C5.63 85.55 5.07 85.96 4.74 86.54C4.41 87.12 4.36 87.82 4.6 88.62C4.84 89.41 5.25 89.96 5.85 90.28C6.45 90.59 7.14 90.63 7.92 90.4L10.78 89.55C11.56 89.32 12.12 88.91 12.45 88.32C12.78 87.73 12.83 87.04 12.6 86.25L12.59 86.24Z" fill="url(#paint17_linear_188_550)"/>
                        <path d="M12.34 74.13C12.46 75.62 12.15 76.84 11.41 77.78C10.67 78.72 9.53 79.26 8.01 79.39L5.17 79.62C3.65 79.74 2.44 79.4 1.55 78.59C0.66 77.78 0.15 76.63 0.03 75.14C-0.09 73.65 0.22 72.43 0.96 71.49C1.71 70.54 2.84 70.01 4.36 69.88L7.2 69.65C8.72 69.52 9.93 69.87 10.82 70.68C11.71 71.49 12.22 72.64 12.34 74.13ZM10.34 74.3C10.27 73.47 9.98 72.84 9.45 72.41C8.93 71.99 8.26 71.81 7.45 71.88L4.47 72.13C3.66 72.2 3.03 72.48 2.58 72.98C2.13 73.48 1.94 74.15 2.01 74.98C2.08 75.8 2.37 76.43 2.9 76.86C3.42 77.29 4.09 77.47 4.9 77.4L7.88 77.15C8.69 77.08 9.32 76.8 9.77 76.29C10.22 75.78 10.41 75.12 10.34 74.29V74.3Z" fill="url(#paint18_linear_188_550)"/>
                        <path d="M11.81 66.92L0 65.57L0.25 63.34L4.94 63.88L4.97 63.58L0.72 59.22L1.05 56.37L6.31 61.96L12.88 57.55L12.55 60.49L7.31 63.86L7.27 64.16L12.06 64.71L11.81 66.94V66.92Z" fill="url(#paint19_linear_188_550)"/>
                        <path d="M14.63 51.25L3.68 46.63L5.34 42.7L15.8 44.55L15.92 44.27L6.38 40.25L7.24 38.22L18.19 42.84L16.53 46.77L6.07 44.92L5.95 45.2L15.49 49.22L14.63 51.25Z" fill="url(#paint20_linear_188_550)"/>
                        <path d="M22.24 36.88C21.39 38.11 20.38 38.85 19.2 39.12C18.02 39.38 16.81 39.08 15.55 38.21L13.2 36.59C11.94 35.72 11.23 34.69 11.05 33.5C10.88 32.31 11.21 31.1 12.06 29.87C12.91 28.64 13.92 27.9 15.1 27.63C16.28 27.37 17.49 27.67 18.75 28.54L21.1 30.16C22.36 31.03 23.07 32.06 23.25 33.25C23.42 34.44 23.09 35.65 22.24 36.88ZM20.59 35.74C21.07 35.05 21.24 34.38 21.1 33.72C20.96 33.06 20.56 32.5 19.89 32.04L17.43 30.34C16.76 29.88 16.09 29.7 15.43 29.8C14.77 29.91 14.2 30.3 13.72 30.99C13.25 31.67 13.08 32.34 13.22 33C13.35 33.66 13.76 34.23 14.43 34.69L16.89 36.39C17.56 36.85 18.23 37.03 18.9 36.92C19.57 36.81 20.14 36.41 20.6 35.73L20.59 35.74Z" fill="url(#paint21_linear_188_550)"/>
                        <path d="M26.87 30.28L17.77 22.48L19.42 20.99L27.17 27.9L27.4 27.7L21.61 19.02L24.49 16.43L32.5 23.11L32.73 22.91L26.69 14.46L28.34 12.97L35.12 22.85L32.24 25.44L24.05 18.61L23.82 18.81L29.74 27.69L26.86 30.28H26.87Z" fill="url(#paint22_linear_188_550)"/>
                        <path d="M47.76 12.32C47.34 12.48 46.92 12.53 46.5 12.46C46.08 12.39 45.7 12.22 45.36 11.95C45.02 11.68 44.77 11.33 44.6 10.89C44.44 10.47 44.39 10.05 44.46 9.63C44.53 9.21 44.69 8.84 44.97 8.5C45.24 8.17 45.6 7.92 46.03 7.75C46.47 7.58 46.91 7.53 47.32 7.59C47.74 7.66 48.11 7.82 48.44 8.09C48.77 8.36 49.01 8.72 49.18 9.16C49.35 9.6 49.39 10.04 49.32 10.46C49.24 10.88 49.07 11.26 48.79 11.59C48.51 11.92 48.17 12.16 47.76 12.32Z" fill="url(#paint23_linear_188_550)"/>
                        <defs>
                        <linearGradient id="paint0_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint2_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint3_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint4_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint5_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint6_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint7_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint8_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint9_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint10_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint11_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint12_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint13_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint14_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint15_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint16_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint17_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint18_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint19_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint20_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint21_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint22_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        <linearGradient id="paint23_linear_188_550" x1="0" y1="0" x2="138.9" y2="139.16" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBEB05"/>
                        <stop offset="0.49" stopColor="#E42929"/>
                        <stop offset="1" stopColor="#4284F4"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

            </div>
        </Link>
    );
}

export default ReserveFreeCallCTA;