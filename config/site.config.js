  /**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'seanalter1@outlook.com',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: 'data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAL8AAAC/AAAAvwAAAL8AAAC/AAAAvwAAAL8AAAC/AAAAvwAAAL8AAAC/AAAAvwAAAC8AAAAAAAAAAAAAAKAwYXb/W6G+/1uhvv9bob7/W6G+/1uhvv9bob7/W6G+/1uhvv9bob7/W6G+/ypLWf8AAAB2AAAAAAAAAAAAAACgJXaZ/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//9Tk67/AAAAtgAAAAAAAAAAAAAAoAlqlP941v//etf//3rX//961///etf//3rX//961///etf//3rX//961///b8Xq/wIDBO8AAAAHAAAAAAAAAKAAZpP/Ys37/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//8WJy//AAAANwAAAAAAAACgAGaT/0TA9v961///etf//3rX//961///etf//3rX//961///etf//3rX//961///NF1u/wAAAHcAAAAAAAAAoABmk/8mtPL/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//1KSrv8AAAC3AAAAAAAAAKAAZpP/Cajt/3fW/v961///etf//3rX//961///etf//3rX//961///etf//3rX//9vxen/AQME7wAAAAcAAACgAGaT/wCk7P9jzfv/etf//3rX//961///etf//3rX//961///etf//3rX//961///etb+/xYnLv8AAAA4AAAAoAZRcf81oL//SajC/0yowv8dhrb/HYa2/x2Gtv8dhrb/HYa2/x2Gtv8dhrb/HVRr/x01QP8KEhX/AAAAdwAAAHoNCQP8oW4n/6dxKP+FWiD/AAAA7QAAAL8AAAC/AAAAvwAAAL8AAAC/AAAAvwAAAL8AAABwAAAAQAAAACgAAAAAAAAAaQAAAL8AAADBAAAAuAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQAAAH8AAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAI4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAD+Cxkf/zxrfv88a37/PGt+/zxrfv88a37/PGt+/zxrfv88a37/PGt+/zxrfv88a37/PGt+/zxrfv88a37/PGt+/zxrfv88a37/PGt+/zxrfv88a37/PGt+/y9VZf8AAQH/AAAAywAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAQgAAAP4HLT3/ctT9/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///ccjt/wcNEP8AAADzAAAAGgAAAAAAAAAAAAAAAAAAAAAAAABCAAAA/gApPP9ayvr/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//951v7/HTQ//wAAAP4AAABPAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAD+ACk7/zy+9f961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//87an7/AAAA/wAAAI4AAAAAAAAAAAAAAAAAAAAAAAAAQgAAAP4AKTv/HrHw/3nX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//1mfvf8AAAD/AAAAywAAAAMAAAAAAAAAAAAAAAAAAABCAAAA/gApO/8Hp+z/ctP+/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///cMfs/wcOEf8AAAD0AAAAGQAAAAAAAAAAAAAAAAAAAEIAAAD+ACk7/wCk6/9ayvr/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//951v7/HTQ+/wAAAP4AAABPAAAAAAAAAAAAAAAAAAAAQgAAAP4AKTv/AKTr/zy99f961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//86an3/AAAA/wAAAI8AAAAAAAAAAAAAAAAAAABCAAAA/gApO/8ApOv/HrHw/3nX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//1mfvP8AAAH/AAAAywAAAAMAAAAAAAAAAAAAAEIAAAD+ACk7/wCk6/8Hp+3/ctP9/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///ccfs/wcNEP8AAAD0AAAAGgAAAAAAAAAAAAAAQgAAAP4AKTv/AKTr/wCk7P9byvr/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//951f3/HTU//wAAAP4AAABPAAAAAAAAAAAAAABCAAAA/gApO/8ApOv/AKTs/zy+9f961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//86aX3/AAAA/wAAAI8AAAAAAAAAAAAAAEIAAAD+ACk7/wCk6/8ApOz/HrHw/3nX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//1ieu/8AAQH/AAAAzAAAAAMAAAAAAAAAQgAAAP4AKTv/AKTr/wCk7P8IqO3/cdP9/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///ccjs/wYMD/8AAADzAAAAGwAAAAAAAABCAAAA/gApO/8ApOv/AKTs/wCk7P9byvr/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//951f3/HTQ+/wAAAP8AAABQAAAAAAAAAEIAAAD+ACk7/wCk6/8ApOz/AKTs/zy+9f961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//87aXz/AAAA/wAAAI8AAAAAAAAAQgAAAP4AKTv/AKTs/wCk7P8ApOz/Eqzv/zy89f87vPX/O7z1/zu89f87vPX/O7z1/zu89f87vPX/O7z1/zu89f87vPX/O7z1/zu89f87vPX/O7z1/zu89f87vPX/O6jW/ztrgP87a4D/O2uA/yhIVv8AAAD/AAAAzQAAAAIAAABCAAAA/gAUHv8aZH7/a52T/2udk/9rnZP/a52T/2udk/9Qioz/AFF3/wBRd/8AUXf/AFF3/wBRd/8AUXf/AFF3/wBRd/8AUXf/AFF3/wBRd/8AUXf/AFF3/wBRd/8APFj/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD0AAAAGwAAAEIAAAD+AAAA/zEgC//cljb/3pc2/96XNv/elzb/3pc2/59rJv8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA4AAAAIAAAACAAAAAgAAAAIAAAAAgAAAAIQAAAIYAAADzBQMB/1w+Fv9wTBr/cEwa/3BMGv9vSxr/KRsJ/wAAAP8AAAC5AAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIAAAD5AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA1AAAABsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAADkAAAB7AAAAgwAAAIMAAACDAAAAggAAAGIAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAvAAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPgAAAD4AAAA+AAAAPwAAACQAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAC1AAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAPAAAADwAAAA8AAAAKMAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAANEAAAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wIEBf8UJy//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//x01P/8dNT//HTU//xsxO/8IDxL/AAAA/wAAAOkAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wUPFP9FkbD/ccnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/3LJ7v9yye7/csnu/2zA4v8qTFr/AQIC/wAAAPYAAABtAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wIPFP83k7r/dtb+/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3jT+/9Acof/AwYH/wAAAPwAAACYAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8jirf/cNP9/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX/v9Ul7P/CA8S/wAAAP8AAADBAAAAGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Rg7T/Z8/7/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//9mtdf/EiEo/wAAAP8AAADkAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8FfrL/Vcj5/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//90zPL/IT5K/wAAAP8AAAD3AAAAXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8BfLH/Obz1/3nX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961v7/PW6D/wAAAP8AAAD+AAAAmwAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8AfLH/HLHw/3bV/v961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///WaC9/wMHCf8AAAD/AAAA0gAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/B6jt/2jQ/P961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///bsTo/xAeJP8AAAD/AAAA8wAAADUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AaXs/03F+P961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///edT8/yhJWP8AAAD/AAAA/QAAAHAAAAACAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/zG58/931v7/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//0Z+lf8BAwT/AAAA/wAAAKsAAAAKAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/xiv8P9v0/3/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//12mxP8KExb/AAAA/wAAANQAAAAhAAAAAAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/w2p7v9fzPv/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//2u+4v8YLDX/AAAA/wAAAOkAAABFAAAAAQAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wan7f9LxPf/edf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3TM8v8sT13/AQEB/wAAAPYAAABvAAAABAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wKl7P83vPT/dtX+/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3jT+v9Ac4j/AwYH/wAAAP0AAACaAAAACwAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8js/H/cdP+/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rW/v9UlbH/CA8S/wAAAP8AAADCAAAAGQAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8RrO//Zs/8/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//9nttj/ER8l/wAAAP8AAADjAAAANAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8Fp+3/VMj5/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//90zPL/Ij5K/wAAAP8AAAD4AAAAYAAAAAAAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/Or31/3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//951fz/PG2B/wABAf8AAAD/AAAAnAAAAAIAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/HbHx/3XV/v961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///WaC+/wMHCP8AAAD/AAAA0QAAABMAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/Cajt/2fQ/P961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///b8bq/w8cIv8AAAD/AAAA8gAAADgAAAAAAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/AaXs/07F+P961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///eNP7/yhIVv8AAAD/AAAA/gAAAHIAAAABAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/AKTs/zC59P931v7/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//0V9lP8CBAX/AAAA/wAAAKsAAAALAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/AKTs/xuv8P9v0/3/etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//3rX//961///etf//16nxv8IEBT/AAAA/wAAANMAAAAiAAAAAAAAABgAAADAAAAA/wAOFP8Ae7H/AKTs/wCk7P8ApOz/AKTs/wup7f9Jw/f/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rJ+v9ayfr/Wsn6/1rG9P9aq83/WqG//1qhv/9aob//WqG//0+NqP8PHCL/AAAA/wAAAOoAAABGAAAAAAAAABgAAADAAAAA/wANE/8AdKj/BJ7h/wmj4v8Jo+L/CaPi/wqj4/8PpeP/EKXj/xCl4/8QpeP/DKLi/wed4P8HneD/B53g/wed4P8HneD/B53g/wed4P8HneD/B53g/wed4P8HneD/B53g/wed4P8HneD/B53g/wed4P8HneD/B53g/wed4P8HneD/B53g/weRzf8HMEL/Bw0Q/wcNEP8HDRD/Bw0Q/wYMD/8BAwP/AAAA/wAAAPYAAABwAAAABAAAABgAAADAAAAA/wADBf8AHiz/QlZM/6WaZf+lmmX/pZpl/6WaZf+lmmX/pZpl/6WaZf+mmmX/X2lS/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAnO/8AJzv/ACc7/wAkNf8ACQ7/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPwAAACZAAAACwAAABgAAADAAAAA/wAAAP8AAAD/VjkU/9yWNv/elzb/3pc2/96XNv/elzb/3pc2/96XNv/elzb/fFMc/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPoAAADRAAAAwQAAAMEAAADBAAAAwQAAAMEAAACPAAAAEQAAABYAAAC0AAAA8QAAAP4AAAD/LR4K/7h8Lf/QjTP/0Y4z/9GOM//RjjP/0Y4z/9GOM//Bgi7/SjEQ/wAAAP8AAAD+AAAA9AAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAAO8AAADvAAAA7wAAANwAAABIAAAADwAAAA8AAAAPAAAADwAAAA8AAAAMAAAAAQAAAAYAAAAxAAAAUAAAAN8AAAD/AwIB/yQYCP84Jg3/OCYN/zgmDf84Jg3/OCYN/zgmDf8rHQn/CAUB/wAAAP8AAADsAAAAZwAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAAEEAAABBAAAAQQAAADwAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAGgAAADrAAAA/gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAPYAAACXAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AAABoAAAAxQAAAOsAAADxAAAA8gAAAPIAAADyAAAA8gAAAPIAAADtAAAA0wAAAIcAAAAiAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAHAAAADYAAABCAAAAQwAAAEMAAABDAAAAQwAAAEIAAAA6AAAAIgAAAAkAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',

  // Prefix for KV Storage
  kvPrefix: process.env.KV_PREFIX || '',

  // The name of your website. Present alongside your icon.
  title: "The Greatest Giants's files",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/Public',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  // googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  // googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  //googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'Made with ❤ by TheGreatestGiant.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: [],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: "",

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
