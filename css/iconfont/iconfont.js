;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M752.3552 271.6471l-13.1266-13.1266c-14.501-14.4988-37.9942-14.4988-52.4998 0l-173.0763 173.0763-168.908-168.9238c-14.6525-14.6321-38.3627-14.6321-53.0061 0l-13.2329 13.2487c-14.6479 14.6321-14.6479 38.3582 0 52.988l168.908 168.9238-169.8167 169.8235c-14.4988 14.4988-14.4988 38.0078 0 52.4953l13.1312 13.1289c14.4965 14.4988 37.9942 14.4988 52.493 0l169.819-169.8235 178.4269 178.4292c14.6344 14.6344 38.3559 14.6344 52.9813 0l13.2532-13.2419c14.6321-14.6389 14.6321-38.365 0-53.0061l-178.4269-178.4111 173.0763-173.0809C766.8585 309.6413 766.8585 286.1458 752.3552 271.6471z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M964.351 177.7132c2.7791 2.7791 4.4995 6.6191 4.4984 10.8605 0 4.2414-1.7193 8.0814-4.4984 10.8605L667.5569 496.2417l295.3175 295.3288c2.7791 2.7802 4.4984 6.6202 4.4984 10.8605s-1.7183 8.0814-4.4984 10.8605L843.2855 932.8937c-2.7791 2.7802-6.6191 4.4995-10.8605 4.4995s-8.0824-1.7193-10.8616-4.4995L526.2182 637.5526 232.3528 931.4191c-2.7791 2.7791-6.6191 4.4995-10.8605 4.4995s-8.0814-1.7203-10.8605-4.4995L91.0438 811.8303c-2.7791-2.7791-4.4984-6.6191-4.4984-10.8605s1.7193-8.0824 4.4984-10.8605l293.8655-293.8655L89.5662 200.8996c-2.7791-2.7791-4.4995-6.6202-4.4984-10.8616 0-4.2424 1.7193-8.0824 4.5005-10.8616L209.1807 59.5876c2.7802-2.7791 6.6202-4.4984 10.8605-4.4984 4.2414 0 8.0814 1.7193 10.8605 4.4995L526.2182 354.9184 823.039 58.112c2.7802-2.7791 6.6202-4.4984 10.8616-4.4984 4.2414 0 8.0814 1.7193 10.8605 4.4995L964.351 177.7132z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448 448 200.576 448 448S759.424 960 512 960z"  ></path>' +
    '' +
    '<path d="M384 256 768 512 384 768Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M284.233143 233.984c14.262857 0 26.331429 4.827429 36.278857 14.482286 9.910857 9.691429 14.884571 21.650286 14.884571 35.876571L335.396571 323.291429c0 14.262857-4.973714 26.331429-14.884571 36.242286-9.910857 9.910857-22.016 14.884571-36.278857 14.884571L243.821714 374.418286c-13.714286 0-25.563429-4.973714-35.474286-14.884571C198.4 349.622857 193.426286 337.517714 193.426286 323.291429L193.426286 284.379429c0-14.262857 4.973714-26.221714 14.884571-35.876571 9.910857-9.654857 21.76-14.482286 35.474286-14.482286L284.233143 234.020571 284.233143 233.984zM807.862857 233.984c13.750857 0 25.563429 4.827429 35.510857 14.482286 9.910857 9.691429 14.848 21.650286 14.848 35.876571L858.221714 323.291429c0 14.262857-4.937143 26.331429-14.848 36.242286-9.910857 9.910857-21.76 14.884571-35.510857 14.884571l-325.924571 0c-14.262857 0-26.331429-4.973714-36.278857-14.884571C435.785143 349.622857 430.811429 337.517714 430.811429 323.291429L430.811429 284.379429c0-14.262857 4.973714-26.221714 14.884571-35.876571 9.910857-9.654857 22.016-14.482286 36.278857-14.482286L807.862857 234.020571 807.862857 233.984zM284.233143 471.369143c14.262857 0 26.331429 4.973714 36.278857 14.884571 9.910857 9.910857 14.884571 22.016 14.884571 36.242286l0 38.912c0 13.714286-4.973714 25.563429-14.884571 35.510857-9.910857 9.910857-22.016 14.848-36.278857 14.848L243.821714 611.766857c-13.714286 0-25.563429-4.937143-35.474286-14.848-9.910857-9.910857-14.884571-21.796571-14.884571-35.510857l0-38.912c0-14.262857 4.973714-26.331429 14.884571-36.242286 9.910857-9.910857 21.76-14.884571 35.474286-14.884571L284.233143 471.369143 284.233143 471.369143zM807.862857 471.369143c13.750857 0 25.563429 4.973714 35.510857 14.884571 9.910857 9.910857 14.848 22.016 14.848 36.242286l0 38.912c0 13.714286-4.937143 25.563429-14.848 35.510857s-21.76 14.848-35.510857 14.848l-325.924571 0c-14.262857 0-26.331429-4.937143-36.278857-14.848-9.910857-9.910857-14.884571-21.796571-14.884571-35.510857l0-38.912c0-14.262857 4.973714-26.331429 14.884571-36.242286 9.910857-9.910857 22.016-14.884571 36.278857-14.884571L807.862857 471.369143 807.862857 471.369143zM284.233143 709.485714c14.262857 0 26.331429 4.973714 36.278857 14.884571 9.910857 9.910857 14.884571 21.76 14.884571 35.474286l0 38.912c0 14.299429-4.973714 26.368-14.884571 36.278857-9.910857 9.910857-22.016 14.848-36.278857 14.848L243.821714 849.883429c-13.714286 0-25.563429-4.937143-35.474286-14.848-9.910857-9.910857-14.884571-22.016-14.884571-36.278857l0-38.912c0-13.714286 4.973714-25.563429 14.884571-35.474286 9.910857-9.910857 21.76-14.884571 35.474286-14.884571L284.233143 709.485714 284.233143 709.485714zM807.862857 709.485714c13.750857 0 25.563429 4.973714 35.510857 14.884571 9.910857 9.910857 14.848 21.76 14.848 35.474286l0 38.912c0 14.299429-4.937143 26.368-14.848 36.278857s-21.76 14.848-35.510857 14.848l-325.924571 0c-14.262857 0-26.331429-4.937143-36.278857-14.848-9.910857-9.910857-14.884571-22.016-14.884571-36.278857l0-38.912c0-13.714286 4.973714-25.563429 14.884571-35.474286 9.910857-9.910857 22.016-14.884571 36.278857-14.884571L807.862857 709.485714 807.862857 709.485714zM807.862857 709.485714"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ttpodicon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M548.628736 733.289965 331.110758 733.289965c-119.296927 0-216.343174-97.052406-216.343174-216.34535L114.767584 505.199107c0-57.421804 22.300825-111.525026 62.798844-152.346757 10.109666-10.188037 10.042125-26.641777-0.155549-36.758182-10.179254-10.090822-26.642895-10.04682-36.763818 0.153496-50.204486 50.619888-77.859473 117.723192-77.859473 188.951443l0 11.745509c0 147.95575 120.360187 268.327258 268.322147 268.327258l217.516955 0c14.356565 0 25.991022-11.633968 25.991022-25.989931C574.619758 744.920864 562.985301 733.289965 548.628736 733.289965z"  ></path>' +
    '' +
    '<path d="M688.511355 236.869802 444.551058 236.869802l0-69.809949c0-28.955472-19.82432-39.672558-44.058251-23.843034l-139.005608 90.852194c-24.222674 15.829524-24.222674 41.759079 0 57.586556l139.005608 90.854241c24.233931 15.827477 44.058251 5.110391 44.058251-23.845081L444.551058 288.851711l243.960297 0c119.29488 0 216.354431 97.052406 216.354431 216.347396l0 11.745509c0 71.698972-35.485655 138.628314-94.912564 179.030489-11.872897 8.071839-14.955224 24.242124-6.878953 36.110429 5.033854 7.393387 13.198134 11.374048 21.511822 11.374048 5.041018 0 10.11683-1.447978 14.598076-4.493338 73.674999-50.098002 117.663662-133.100414 117.663662-222.021629L956.847829 505.199107C956.847829 357.24131 836.473315 236.869802 688.511355 236.869802z"  ></path>' +
    '' +
    '<path d="M705.646313 455.410144l-24.552193 0c-5.19452 0-9.923417 2.959402-12.233116 7.612375-5.834114 11.765975-16.178127 24.370037-30.728105 37.349653-14.894847 13.30912-32.58446 24.840758-52.59196 34.249035-4.797461 2.249227-7.858298 7.054673-7.858298 12.311397l0 36.873816c0 4.427846 2.195084 8.654101 5.853557 11.190877 2.332213 1.612731 5.061485 2.445702 7.814294 2.445702 1.599495 0 3.193873-0.271176 4.727873-0.832971 12.462346-4.620227 26.696109-11.56643 42.29195-20.742417 5.518922-3.241834 10.693999-6.544043 15.51909-9.844206l0 214.577077c0 7.579629 6.108371 13.687744 13.653524 13.687744l38.103382 0c7.549247 0 13.657618-6.108115 13.657618-13.687744L719.303931 469.046722C719.303931 461.518259 713.19556 455.410144 705.646313 455.410144z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M851.411 82.079 512 421.49 172.589 82.079c-24.993-24.993-65.516-24.993-90.51 0s-24.993 65.516 0 90.51L421.49 512 82.079 851.411c-24.993 24.993-24.993 65.516 0 90.51 24.993 24.993 65.516 24.993 90.51 0L512 602.51l339.411 339.411c24.993 24.993 65.516 24.993 90.51 0 24.993-24.993 24.993-65.516 0-90.51L602.51 512l339.411-339.411c24.993-24.993 24.993-65.516 0-90.51C916.928 57.086 876.405 57.086 851.411 82.079z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont33" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512 0c-282.752 0-512 229.248-512 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 976c-256.256 0-464-207.744-464-464s207.744-464 464-464 464 207.744 464 464S768.256 976 512 976z"  ></path>' +
    '' +
    '<path d="M590.928 475.328 368.832 328.608c-34.944-20.176-63.52-3.664-63.52 36.672l0 293.424c0 40.336 28.576 56.864 63.52 36.672l222.096-146.704C625.872 528.496 625.872 495.504 590.928 475.328z"  ></path>' +
    '' +
    '<path d="M686.688 304c-17.664 0-32 14.336-32 32l0 352c0 17.664 14.336 32 32 32s32-14.336 32-32L718.688 336C718.688 318.336 704.368 304 686.688 304z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont34" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0zM512 976C255.744 976 48 768.256 48 512S255.744 48 512 48c256.272 0 464 207.744 464 464S768.272 976 512 976z"  ></path>' +
    '' +
    '<path d="M655.184 328.608l-222.096 146.704c-34.96 20.176-34.96 53.184 0 73.36l222.096 146.704c34.944 20.176 63.504 3.664 63.504-36.672L718.688 365.296C718.688 324.944 690.128 308.432 655.184 328.608z"  ></path>' +
    '' +
    '<path d="M337.312 304c-17.664 0-32 14.336-32 32l0 352c0 17.664 14.336 32 32 32 17.68 0 32-14.336 32-32L369.312 336C369.312 318.336 355.008 304 337.312 304z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zanting" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M410.393 309.487c-21.593 0-39.156 17.565-39.156 39.156l0 309.72c0 21.592 17.563 39.156 39.156 39.156 21.591 0 39.155-17.564 39.155-39.156l0-309.72C449.548 327.053 431.982 309.487 410.393 309.487z"  ></path>' +
    '' +
    '<path d="M945.896 323.869c-23.246-54.956-56.522-104.31-98.903-146.691-42.382-42.381-91.735-75.657-146.691-98.903-56.903-24.07-117.341-36.274-179.635-36.274-62.29 0-122.728 12.204-179.629 36.274-54.956 23.246-104.31 56.522-146.692 98.903-42.382 42.382-75.657 91.736-98.905 146.691C71.37 380.772 59.165 441.21 59.165 503.504c0 62.293 12.204 122.73 36.273 179.635 23.246 54.955 56.521 104.31 98.903 146.691 42.382 42.381 91.734 75.656 146.69 98.902 56.903 24.069 117.341 36.272 179.635 36.272s122.731-12.203 179.636-36.272c54.955-23.246 104.311-56.521 146.69-98.902 42.381-42.383 75.657-91.736 98.903-146.691 24.068-56.903 36.272-117.342 36.272-179.635C982.169 441.21 969.965 380.772 945.896 323.869zM675.302 869.557c-48.971 20.713-100.998 31.216-154.636 31.216-53.635 0-105.659-10.503-154.63-31.216-47.305-20.008-89.791-48.653-126.279-85.143-36.487-36.489-65.135-78.975-85.144-126.279-20.713-48.971-31.217-100.996-31.217-154.631s10.504-105.66 31.217-154.63c20.009-47.305 48.654-89.792 85.144-126.28 36.489-36.488 78.976-65.135 126.279-85.143 48.971-20.713 100.995-31.215 154.63-31.215s105.66 10.502 154.63 31.215c47.305 20.008 89.792 48.655 126.28 85.143 36.488 36.488 65.135 78.975 85.144 126.28 20.713 48.97 31.216 100.995 31.216 154.63s-10.502 105.66-31.215 154.631c-20.008 47.306-48.652 89.791-85.14 126.279S722.605 849.549 675.302 869.557z"  ></path>' +
    '' +
    '<path d="M630.955 309.487c-21.591 0-39.156 17.565-39.156 39.156l0 309.72c0 21.592 17.565 39.156 39.156 39.156s39.156-17.564 39.156-39.156l0-309.72C670.111 327.053 652.546 309.487 630.955 309.487z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M32 86.19v108.395h960v-108.395h-960zM32 566.184h960v-108.395h-960v108.395zM32 937.81h960v-108.38h-960v108.38z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M789.333333 512c0-75.306667-43.52-140.373333-106.666667-171.733333l0 343.68C745.813333 652.373333 789.333333 587.306667 789.333333 512zM213.333333 384l0 256 170.666667 0 213.333333 213.333333L597.333333 170.666667 384 384 213.333333 384z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-suijibofangzhongzuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M53.952 384.384l249.344 0c9.152 0 25.152 6.848 29.76 11.456l43.456 43.456c16 16 41.152 16 57.216 0 16-16 16-41.152 0-57.216L390.272 338.624C369.664 318.016 333.056 302.016 303.296 302.016L53.952 302.016C31.104 302.016 12.8 320.32 12.8 343.168 12.8 366.08 31.104 384.384 53.952 384.384z"  ></path>' +
    '' +
    '<path d="M767.68 384.384l70.912 0 0 48.064c0 11.456 9.152 16 18.304 9.152l144.128-96.064c11.456-6.848 11.456-18.304 0-25.152l-144.128-96.064c-11.456-6.848-18.304-2.304-18.304 9.152l0 68.608-70.912 0c-61.76 0-141.824 34.304-185.28 77.76L376.512 590.208c-27.456 27.456-86.912 52.608-128.128 52.608L53.952 642.816c-22.848 0-41.152 18.304-41.152 41.152s18.304 38.912 41.152 38.912l194.432 0c61.76 0 141.824-34.304 185.28-77.76l205.888-210.432C667.008 409.536 726.528 384.384 767.68 384.384z"  ></path>' +
    '' +
    '<path d="M856.896 567.36c-11.456-6.848-18.304-2.304-18.304 9.152l0 64.064L705.92 640.576c-6.848 0-22.848-6.848-29.76-11.456L632.704 585.664c-16-16-41.152-16-57.216 0s-16 41.152 0 57.216l43.456 43.456c20.608 20.608 57.216 36.608 84.608 36.608l132.672 0 0 52.608c0 11.456 9.152 16 18.304 9.152l144.128-96.064c11.456-6.848 11.456-18.304 0-25.152L856.896 567.36z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliangwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M444.2 210.6l-195.6 195.8c-5 5-11.6 7.6-18.6 7.6l-111.8-0.6c-14.4 0-26.2 11.6-26.2 26v171c0 14.4 11.6 26 26 26h117.8c7 0 13.6 2.8 18.4 7.6l190 190c16.4 16.4 44.6 4.8 44.6-18.4v-586.6c0-23.2-28.2-34.8-44.6-18.4z"  ></path>' +
    '' +
    '<path d="M808.4 498l114.6-114.6c12-12 12-31.8 0-43.8s-31.8-12-43.8 0l-114.6 114.6-114.6-114.6c-12-12-31.8-12-43.8 0s-12 31.8 0 43.8l114.6 114.6-114.8 114.8c-12 12-12 31.8 0 43.8 6 6 14 9 21.8 9 7.8 0 15.8-3 21.8-9l114.6-114.6 114.6 114.6c6 6 14 9 21.8 9s15.8-3 21.8-9c12-12 12-31.8 0-43.8l-114-114.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geci" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M793.941333 160 230.058667 160C191.36 160 160 191.616 160 230.058667l0 563.84C160 832.64 191.616 864 230.058667 864l563.84 0c38.698667 0 70.058667-31.616 70.058667-70.058667L863.957333 230.058667C864 191.36 832.384 160 793.941333 160zM799.658667 800c0-0.298667-575.658667-0.341333-575.658667-0.341333C224.298667 799.658667 224.341333 224 224.341333 224 224.341333 224.298667 800 224.341333 800 224.341333 799.701333 224.341333 799.658667 800 799.658667 800z"  ></path>' +
    '' +
    '<path d="M703.658667 681.472l0.341333 0.170667L704 349.653333c-1.152-18.602667-13.952-28.501333-38.357333-29.653333L459.776 320c-12.8 1.152-19.754667 9.301333-20.949333 24.405333 1.152 15.104 8.149333 23.253333 20.949333 24.405333l190.122667 0c3.498667 0 5.248 1.749333 5.248 5.248l0 282.581333 0.469333 0.256-65.792 0c-6.698667 0-17.578667 8.704-18.432 22.656 0.853333 15.104 10.112 23.253333 18.432 24.405333l98.944 0C697.557333 702.890667 702.506667 695.381333 703.658667 681.472zM477.226667 438.613333c-11.648-1.152-18.005333-9.301333-19.2-24.405333 1.152-13.952 7.552-21.504 19.2-22.656l143.018667 0c13.952 1.152 21.504 8.704 22.656 22.656-1.152 15.104-8.149333 23.253333-20.949333 24.405333L477.226667 438.613333zM334.72 367.104C327.893333 365.952 312.704 357.802667 312.021333 342.656 312.704 328.704 325.418667 321.152 332.288 320l56.234667 0c8.234667 1.152 20.010667 8.704 20.693333 22.656C408.576 357.802667 396.074667 365.952 388.522667 367.104L334.72 367.104zM402.218667 655.616l0-204.8c1.152-25.6-8.704-37.802667-29.653333-36.650667L330.709333 414.165333C317.909333 415.36 310.954667 423.509333 309.76 438.613333c1.152 16.298667 8.149333 25.002667 20.949333 26.154667L348.16 464.768c3.498667 0 5.248 1.749333 5.248 5.248l0 206.677333c-0.085333 0.512-0.128 1.066667-0.128 1.621333 0.128 3.029333 0.853333 5.76 1.962667 8.234667 2.901333 9.514667 7.893333 14.464 19.114667 17.237333 1.877333 0.298667 3.712-0.085333 5.546667-1.066667l49.152 0c7.253333-1.152 20.778667-9.301333 21.461333-24.405333-0.64-13.952-13.525333-21.504-21.461333-22.656 0 0-12.16 0-24.874667 0L402.218667 655.658667zM499.925333 633.984c-24.405333 0-36.650667-11.648-36.650667-34.901333L463.274667 497.92c0-23.253333 10.453333-34.901333 31.402667-34.901333l102.912 0c24.405333 0 36.053333 9.898667 34.901333 29.653333l0 106.410667c0 23.253333-10.453333 34.901333-31.402667 34.901333L499.925333 633.984zM512.128 583.381333c1.152 2.346667 2.901333 4.053333 5.248 5.248l61.056 0c3.498667 0 5.248-1.749333 5.248-5.248L583.68 515.370667c0-3.498667-1.749333-5.248-5.248-5.248L517.333333 510.122667c-3.498667 0-5.248 1.749333-5.248 5.248L512.085333 583.381333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M253.141333 677.290667l91.093333 0c2.474667 2.474667 18.304 16 47.402667 40.533333 29.098667 24.533333 57.386667 48.426667 84.821333 71.722667 27.434667 23.296 41.6 34.944 42.410667 34.944 7.466667 4.992 14.976 7.466667 22.442667 7.466667l2.474667 0c14.976-1.664 24.533333-10.794667 28.714667-27.434667L572.501333 220.714667c-4.138667-16.64-13.738667-25.770667-28.714667-27.434667l-2.474667 0c-7.466667 0-14.976 2.474667-22.442667 7.466667-111.445333 96.469333-169.685333 147.2-174.677333 152.192L253.141333 352.938667c-10.794667 0-20.181333 3.968-28.074667 11.861333C217.173333 372.693333 213.205333 382.037333 213.205333 392.874667l0 4.992 0 234.538667 0 4.992c0 10.794667 3.968 20.181333 11.861333 28.074667C232.96 673.365333 242.304 677.290667 253.141333 677.290667L253.141333 677.290667zM267.392 409.088l87.210667 0c10.794667 0 20.394667-3.754667 28.714667-11.221333C389.12 391.210667 415.146667 365.525333 515.797333 278.186667l0 463.488c-99.797333-84.010667-121.685333-105.557333-128.298667-112.213333-7.466667-7.466667-17.066667-11.221333-28.714667-11.221333L267.392 618.24 267.392 409.088zM634.88 579.584c-4.992 2.474667-8.32 6.229333-9.984 11.221333-1.664 4.992-2.474667 12.885333 0 17.877333 4.138667 7.466667 9.984 11.221333 17.450667 11.221333 3.328 0 6.656-0.426667 9.984-1.237333 19.968-10.794667 35.754667-25.557333 47.402667-44.288 11.648-18.730667 17.450667-39.296 17.450667-61.738667s-5.802667-43.050667-17.450667-61.738667c-11.648-18.730667-27.434667-33.493333-47.402667-44.288-4.992-2.474667-12.074667-2.090667-17.450667 0-5.418667 2.090667-9.6 5.333333-12.117333 10.325333s-3.84 12.8-2.176 17.792c1.664 4.992 7.253333 11.221333 12.16 14.378667 23.765333 15.317333 39.552 31.957333 39.552 63.573333S634.88 579.584 634.88 579.584zM606.208 738.602667c2.474667 10.794667 9.344 15.829333 19.968 18.517333 0.810667 0.213333 2.090667 0.810667 3.754667 0 58.24-10.794667 106.453333-39.296 144.725333-85.461333 38.272-46.165333 57.386667-99.2 57.386667-159.061333s-19.114667-112.896-57.386667-159.061333c-38.272-46.165333-83.456-74.410667-141.653333-85.205333-4.992-1.664-12.842667-1.066667-17.408 2.218667-4.565333 3.328-8.106667 10.154667-9.344 15.573333-1.237333 5.418667 0.213333 13.226667 3.114667 17.792 2.901333 4.565333 7.296 7.296 13.098667 8.106667 49.066667 9.984 85.76 31.658667 117.76 70.314667 32 38.656 47.018667 80.298667 47.018667 130.218667s-14.976 91.306667-47.018667 129.962667c-32 38.656-64.938667 58.453333-114.048 68.394667-5.802667 0.810667-13.952 5.589333-16.853333 10.154667-2.901333 4.565333-3.968 15.189333-3.114667 20.992L606.208 738.602667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shunxubofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M807.752 389.55c-30.609-51.157-72.461-92.654-122.336-121.967 67.146 51.405 60.661 48.468 53.49 48.468-6.956 0-13.267 2.763-17.894 7.252-4.75 4.627-7.701 11.094-7.701 18.251 0 6.943 2.777 13.237 7.282 17.833 34.135 34.747 59.669 78.064 73.077 126.423-4.879-28.317 10.006 22.447 10.006 76.688 0 0.024 0 0.047 0 0.071 0 160.334-130.888 290.792-291.676 290.792-160.809 0-291.635-130.437-291.635-290.755 0-136.97 95.601-251.802 223.703-282.46-0.696 41.943 4.26 105.472 11.919 111.616 4.449 3.579 10.166 5.744 16.389 5.744 7.985 0 15.138-3.565 19.953-9.19l102.901-122.977c4.854-5.837 6.369-13.066 5.202-19.988-0.237-7.606-3.857-14.32-9.398-18.719l-126.016-100.823c-11.080-8.847-29.102-8.561-36.352 3.461 3.195 24.883 5.775 67.973 9.769 99.963-153.764 33.628-269.271 170.127-269.271 333.373 0 188.436 153.805 341.77 342.856 341.77 189.010 0 342.815-153.313 342.815-341.77 0-60.948-16.282-120.791-47.084-173.056z" fill="#707070" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1010.255 935.96l-0.028-0.028v0.029h0.028c9.13 10.666 13.71 22.47 13.71 35.412 0 14.478-5.148 26.85-15.445 37.147a50.686 50.686 0 0 1-37.175 15.445 55.596 55.596 0 0 1-17.72-2.873 47.216 47.216 0 0 1-15.445-8.533l-5.718-4.58-282.529-284.548c-67.837 48.013-143.725 71.99-227.604 71.99-8.391 0-16.953-0.37-25.713-1.109a277.608 277.608 0 0 1-25.742-3.441 368.059 368.059 0 0 1-162.44-59.447c-53.36-34.274-96.054-79.585-128.081-135.988a370.903 370.903 0 0 1-36.038-83.425 408.391 408.391 0 0 1-16.014-90.28 387.173 387.173 0 0 1 5.149-91.417 377.331 377.331 0 0 1 50.344-137.723 380.375 380.375 0 0 1 98.358-109.138c33.563-26.68 71.109-47.244 112.665-61.722A384.926 384.926 0 0 1 422.329 0c18.317 0 35.838 1.138 52.649 3.442 44.969 6.087 88.032 19.796 129.218 41.129a381.484 381.484 0 0 1 107.545 82.287c35.81 37.346 63.06 81.519 81.747 132.575 18.687 51.056 26.907 102.852 24.603 155.415-3.043 87.634-33.165 166.48-90.365 236.564l283.639 284.549h-1.11z m-251.64-522.25a320.558 320.558 0 0 0-22.868-137.126 323.573 323.573 0 0 0-40.048-75.432c-16.782-23.608-36.408-44.741-58.878-63.429a338.477 338.477 0 0 0-72.616-46.306A332.277 332.277 0 0 0 385.779 62.86a52.62 52.62 0 0 0-10.297 1.138l-6.883 1.138a324.568 324.568 0 0 0-135.533 54.27 323.26 323.26 0 0 0-98.927 106.862c-28.187 46.448-43.632 98.272-46.334 155.415-2.674 57.143 7.794 110.105 31.458 158.857a319.99 319.99 0 0 0 86.326 114.286 330.57 330.57 0 0 0 126.375 67.44c48.809 13.709 97.988 16.383 147.536 7.992a332.618 332.618 0 0 0 75.517-22.84 345.816 345.816 0 0 0 68.037-39.423 346.356 346.356 0 0 0 57.2-53.73c17.152-20.195 31.459-42.096 42.893-65.704v0.028a328.152 328.152 0 0 0 35.469-134.879z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)