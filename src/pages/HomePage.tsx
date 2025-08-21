import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const services = [
    {
      id: 1,
      name: 'Phòng Gym',
      description: 'Phòng tập thể dục hiện đại với đầy đủ thiết bị',
      image: 'https://www.nhavanhoasinhvien.vn/wp-content/uploads/2024/12/z6102634179598_0efe25717f0d11fb8140cf59f07e467a-scaled.jpg',
      price: '200,000 VNĐ/tháng',
    },
    {
      id: 2,
      name: 'Bowling',
      description: 'Sân bowling chuyên nghiệp với 8 làn chơi',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFRUXFxgYGBgXGBgaGBcYFxcYFxkYGBYYHSggHR4lGxcYITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy4lICUtLS0tLS0vMC8tLy8tLS01LS0tLS0tLy0tLy0tLS01LS0tLS8tLy0tLy0tLS0tLS0vLf/AABEIAKEBOQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEYQAAIBAgQCCAMDCgQFBAMAAAECEQADBBIhMQVBBhMiUWFxgZEyobFSwdEHFBUjM0JicpLwQ4Ki4RZTc7LCNFST0hck8f/EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAxEQACAgEEAQEGBQQDAQAAAAAAAQIRAwQSITFRQQUTIjJhcRSBkdHwobHB4SNC8TP/2gAMAwEAAhEDEQA/AN5dwxFQRFEbOMX94SKfft22+Ex51TQ9gyrFl9abdsFd65BQug1Zb4l1ZyMnYY/GANCBuSPlPjQ68+Yk1LiLkdkct/PuquaDlu5JVcHUldNJNAI4UtNmlmoQdTppgNXcFhVcElgsd/OiuQFSaQmuuaGoy1Qg/NSFqjLUx3gHyokJi9NLVXttoCTyri9MkCyYtTGEEHvX/wAiPuqItU974E8j9TTpAbGE10UxWpwNEg6upAaWoQWrOBWS38v3ihPGMYbNprigEiAAdtT4VH0A4ldvXrxuGQLegAAAM/3vTLyBsnxfErVswzgHko1Y+SjWhHFukjWoiwwmcpuaTESQg1jUbxUfFcVcwzuVFsHc3Gyl30B7KqBttWQbHXMTcl2LsTlGwAE6QANpJM00Y2ByCT8ZxGIYIbhUE7L2QBzmNSI7ya1vRNR1ErsXcjxAOUH/AE1hrBCs5B0CvBGx0IkVvei6ZcLZH8M+5J++mkuARfJpOGXUVpcSKdxS+jN2BAocDTppBhDWa43iCuI7JIISJBI0JBjStOFrCdKb2bEOgP2QY7sokU8UwS6IkuZ2zH4R8Pj3t9w9Tzq3w/GIlwu5OVQp0BJ35AeVCs1U8RxC0kzdjwWDy8BP/wDTTCBbpX0nbFNnGHbJbVyhLasN8xBUQezMcu+sjd4w92QLaIGAByqZIBkAuxJidd6tW+Kh7gSyjO5kAnyM6mTtT/8AhrHO5C2Mo+0SAuuu7GT6CjwCmQYe0TDNp3a/341PkX+zRTC/k9xD/t8Qqj7KZm+fZFX/AP8AGlj/AJ1z2FDchtp6UcA0E6aa76+lVwTVu3fIWSwkaZTM+dMLI/8ACflWRpehZY61dzQjNAnfurr4NpmXMCREEbGRMxyqG2uvgN/AVBeuSZG397+NVyd8MdccjaQmkmkJoEFmummzXTQIOrprkcA61LjbyEyi5RG0zRoBFmpRdqAvUTXNY8JopELLXKi63UgcqiL01xB8wD7imUQWSl6dhxmYL3mKrzVjAn9Yp7jPsJp1EDZERGndp7U4GmxJpEdScoIJ7hTEJKtYlP1ds+f3fjQ/FuVRiNwpjzjT50M6VBjgsMzHtlVmSRmLMBsDG08uXKikKy3ieMWE0NwE9y9o/Lb1puA4qLrhQpAKsZJ17JUbDxPfyNYHB3AWIGo5HvrU9E5a9dPJUtqPWWPz+tO4UgbuTT0ororopBinxUrlhhIM+4Gh9CZ9KrdFcULK4m/lkC2oVdtC0A+Z38oql0pxcMtueUt5Hl6x7Vn8VxNwrKHKK0ZobLMcjViXAjfJ3SLEdY926FYAwJPkoiduRoLwi0Q6OXCgTMxsQRudt6qYl0BBzseQAJYeSzI9qu4TD4i5+ywt1hyLDIPc064QOyS1YFm0xk5WlQzTBIAJAMbxHvXpvD7iW7NsFgIRBv8AwisSvRzGXraW7gtWlUsw7RLS4UGcoIOiCt3YS3b+C1bU94UE+5p4yxf97f2LcexXuskTEZvgR38gY99qkFq8dwlsfxsJ9ln60x8Sx3Y/35VHmpvxEY/JBfnyWe8iuo/ryWRYX9++zeFtY+bTWA45wHGX8TdNkLatluyzsCSAAJ0DH5Cttmrs9Vzzzn2xJycuzEYf8npb/wBRinfwQR82JB/po1guheCt/wCCHPe5Lf6fh+VHQ1KZqvcxKQ3D4dLYi2ioO5VCj2FSFqZNITShH5q7NUc101CBy5eWAHQg8z9I0qFrY3UyPp50Z4plflrQdbvVSZIkEac55VXLgKExt+QgnVVI9CQQJ9PnVOaja7OtNz1U0NZKTSTUWapHtkKGOxmNRy8KFEs7NUrm3k0JzzqNIjzqviMSDEKFgQYnXx1qqbsyBvRUQWWGuVG93QxS3cFcA7SlfPQ+1MWyZ1PI/SnWMG4TrKRuR759tKUYY91R468tsLmMQO7UySfvp1FIFi1YxvxR4L/2iq2DDXVZ1U5VbKSe8ifvqh0w4l1Vxl3JMc+yIjbaQOevlTUCwgtxSSsiRuJ1HmKt4FZb0b/tPOs70XtyLr97AewnT+r5UVxuMFlGJIBKlQDrM6HTugmhtJZmuK8RuZlQtAcwIOyzzga6T3Ub6Kuou3XCyilUA/lEn3JFYt7nWPaEhAkLmY7/AMRPnJmtl0TtH82D5T22dtSBzy7nwUVaoWuARTbCfSDGAKzqMskQB3k6Csv0o4qMllCVZbdq3BAJOfJLCRpMtEHainSXB37qoto29yWlmA5RspnnQiz0Sc/tLyjfS2ms9+ZyfpUpR7JJOwDwmwTlUbswj10kn1HzrX9BFLJeZVYzcy6CfhUcxpzNRWOiOGHxm7c/muMB7JlFGsJYS0uS2uVZmBtPf56VHNAiqYUNojcovmwJ9lmomyfbZvIR9aq5qQtU9610kv59Szd4AfGejP5xea4cRctoQsIgEiBB7ZmZ32pMN0MwaasjXD33HZvcSB8q0WGsNcOVRJ7qicEGKRybFobh8NbtgKiKoGwAAjyqUvTAD3VNYwrvoqk0thI89cacLJq3iL2dVXKoy8wNT5mpZCjNdNTLaFXcRbtZVyzmjtSNKNkBlKBTbXDwHz53JBYgFuz2uUdw5Vby0E2LFt9qiJFNG8KDct9WtpSRz50LAqW1cZdiR5UbGIr2HIMHSo+rFTsJ3pMlQhEFFLlqTq6Xqj3VCAc9MG/eQfOkbpEr7oYHiNKAWl1La6bBdOflUZtxMbEffXV/BYn5/n5HmV7ZzJLr9H+4bPGrUgSyk7Ag86u27k7T7Gsdat5sWi8hH+lJ+or0XhigCsGpwxxtJeqs7mlzyyxbfo6KF3FJbkEq0ganMIO+kxryqsMTOxB9RXdMHHVmN/751nMDh2i0dyWk68lYf/VqOHTe8juuv/LFz6tYpKLXf70afD2sxEmB4VouFZLaGFElok7xnA38q8yXEKtkv1jN+sgwMvaA2kzp2t6nu8XyPcAYgZRB1nNIgeoBoSxpPh2WxyWuVR6Pxjits65gYMmCCdjG3jWdTiSul24uioBDSIJMEx5Aj3rELxC4bLpLFrkAmJEKMwgzprcfTwHo5rjiwLQKxmZjM9xAOgOsAc6eOmyT6RXPV4YcOSNl0DxRxN53cyqroOXbaF9cqE/5qB9L+JF8Q4WVAuHSP3bRO/sD6eFRdGOJXMMCqZTmIO0KMqxvPgT60mFtWRq1hbh11e5cO+/ZnKfan/CZU+ip+0NOu5hrD3Dh8Gt1gzSBcYQdS7SJMfxCspiRexNwMbN10nmsEjnJuETp6VprvGsxAKEbAQwIHLblUdriyG71OYdZEhJXMdM2ikydJPpVeTG4PlUaMefHlV43aJej2Ha1ZVbmjSSQsaST+9JB0jlTeLcJt32UlrqhZkB5zTG5I02/dipMTjbStlDk6AyVI3Gumux0qzhcVYZYLgGdW1OndHLzoN5K+n2Lfer5bRQw/AsMhBFlSRzYZj7tNEpjSIonhFwO7YgE+Lqo+n31PcxGGuuQrKzKANSToNBBOh9KpaZNyAwapsRYZTB18tRrruK03DbSL+6vsKbxgAnQf7UKJZm7OHZzCgk/hUttVysCO1pBnQd8jnVhrRU7gebAffTVsz+8PST9BRoNkWHwoaczBYBI8T3VH1AqxlHef6WH1Ap9sKTBMePZ+kz8qFBsjwpCsDH+9OxBBYlRA7u6nsgmAJHfP3ATS9S32BPm/wD9RQCV4qSzdZTKkjyqbqX+yP6Sfq1KcM8TMaxsoPsZoWvIaZXyzThaPcanNl+9vKQPTRadbVhOs+ZJ+U0N0Q7ZEAsHupTZI1MAeJq06tAhhPMRtVa6GjVpHdA+kVNyJsY2E53E95pwCEEhiY7lJ3pgLcnPofwpbVwA9s5hroWIo7kTYxcy/YuH/LH1p9txOqEebKPTeqhyfaHuKksrbJjNHjp9xo2/ANv1LH5wPsoPN5+gppxnjbHkGP3CnXcIgmGJ8QDH0qpdRRzPsanxeAUvJYvYloBzEDvCaE+Emofzw/8AMb+hfxqvcxZy5ZYr3cvaar9cO4/L8aZRl4BcfJmMPidCCD8vw8aZdvjuM1yMoH9+NRXGXfw/GvRNVHs8IkpSqh/ATmxPo2tbq08Csd0TtA3XYchHuf8Aata2grja7/614SPW+z1/w35bYE6SMWEDvFVlwjtbAGkAqCrCdSZ38SaZxe8zXVUKMgDMWnUZQZhY8OZG9NwPEVaEXNOp1AjfwNatDPHsUW+b6OX7Yx6jd7yEeElz9rbf5FVOCRAKvA13EEncnSOVX7eCA1CxOp7Ikn38fnVmxc1Ovz9fvqRcYjzkcNBg5SDB7tK6ixwg6VHm8uo1GS27aXfdK/3ZVa3JkAkeCsfoagxOQKcwjzRhzHfRvh2JW1bVSDNwSARBJUHMwnlqP7FBuLFU/WnMdCSoSTGmqwTO8RA2rlYfaTlNQcVXk9TqPYEccHljNtrmq7fj9SOx1Z0EEwdADO3+9WMM1pQZgec71HwvEpdVbqQVYGNPEDUd41FdjeI2LbhLlxEYgntaDb7R0nTaurLzaPKyjKUnBKV+vngkdrZK5TJn7iaXo30ZK49se1wEZWVUy6iUCTmnuzcudOw+RyjoVZTqGXUEbaEUfwxha5HtBvel9D1XsGFad/d9/kZviAtC84LQQdo9RTMNbUzkbMTHLSo+IWAblxiBqdz/AH4U7h94JbuFQqsFLDmojSTtzjT51snmWDFBPtpV+hjxaF6rPkm727nfXnryH8FwlAAbnbO/gK44SzeUhVKaDUCIkSI5GsRa49iZuriiHtoM6MsW2JUEZYAMAgnfWRWy4fgMjK3W3CANmYkdrWD7xNc+WSbSm2/oehhpcONbFFIDGy1q51bXDPKCRIjQ6UuJ4lcWAt5pJH7xPPuNQcV42l3GLZ6q4rKHAZhCuFImIM6Hvin43BAPbI1kqTPLWt+Jxy491L9DzereTT6pY98q+4SfizJq7O3fDAfWoLvGWIEMrLrGmpBOkkGqXGeFM+VlmCCG8wJBHoDWV4thblxVTD3sqogBUBgxcatLDwIOmh1rkYcmNTl7xWj0+qw5J4oLA6lfP2pm5/SrKubKDtpJ1n0otgsS96DkAJ1JJ3nwisJw3iSCyq379tbywGUssmHIkmdCQAfWtXwrpBhlA/X2tvtr+NasmPC1cUczSZtVulHK+m114/IJi8/2QNfHlpRBFuMMwIX1b7zVPE8Twh7S4q0djGZefiDEjn51PZ4tZjS9bPk6/jWSoUdS52BeknH7uDtm4STqFAHedpk7Ub6L4psXhbd9mKlwTAgaBiBMc4FAekIwuJQ27l1Msg6XFBkbazRrouluzYt27ZzW1kCGmRmJjMKbbHwTc/JLfV1MBz8qtYBWM5nMc9YqXErbMwSTy00M8u/SsJ06wfXOtt2u5AmltNFLEmS0bkCBB7zSSlGKtoeMZSdJm6xuGWJVj6MY+tBrtojmfc1jvydYg4Rrtm4XNkiUiCEbMJ7J71J23K1rbnFkJMKCJ01IMciRyqqWphF9F8dLOS7GNbpvVU79IWuYZfYiuxOOsW1zvdRFmJYhdd4g61bjzwn0yrJp8kOWhyWaLcPsDuoZw7FWry57Vxbi7SpB17jG1E/z8WLbuzZUAlueg7vGatd+hSq9Q8lvQ6bb+FDcbZBrKN0oxGJ7IIsrPZiDcM6dpyYH4x51Kr4m25U3SxESGKkbbST9DSu4y2S4fZYo3Hcui9iLUVVynwq5av5+y0K/cCD7UnUUyK2eZ2uJ22GhI05iuu3w2g1nTQE7DWhtrCiB5VKMExyqu5PeNgJOpMDSupKb2WzzscOJ5lGPk0nRLiFtA4J7RZdADOsATPia1l272SawHR1VLRoSHgxA72G2+gitL0lxZt4O84MEW2gzqCRA+ZFcjUPdO/J6HAlGG1dIziMrXxGfOW0OnPv5x7860+IVVE5dz+6BP96Vg+hmHu/nii47HLZ6wg8mfsgekn2rV9JuMphbYZgWJMKoME+M923vRw0s0bfHYmtUp6ecYrlqv14LGHvLJPb38OWn3UAw3FSuJvD/AAmz5TAzFkj5an5VHZ4ndOIt2i9krczQEJJQ7y7E7CSfGKG8QNq1iWfPcuoFZSbVuUWdW7U7zJPjXTnrcbdLtetf2ONpPZGTHGbydSpUn4fb+xLd4k1q4py52tuLhJVSqrMAAEEZTOs767VWxvF2Q3cSq6ucpgAWtCI0WCdI5mJ8ap8c4ytxktWtLTW7ZeFVWYKCSGbcwBzND0x925+ytk9osMqk5S3ID4fcVgjGGy0lf792ehb/AOrfH7dGg4NxdyQl39V1RLkKCuZdZRlHPXu7qL8X4kpS2xCvYdWAQbSsHQDTQ6+tYaxaurdZmzAhWzFgRmnsxrvqflRnEY4phfzcKCCxIZtWAIWY7jKzTe4eVxvlX1f0V/pwVxzLBKSjScl4+rf9bZrug1odSzrcTIrNltCc1tSROp3E6z/FRbjnFntdT1ZGVnQMTqCpcKwnlod6864ZZuNatZO0FZzlnZiR2iSY2A08ad0rxTG71eY5EAETppMmOZ1NUaqVTcV6cfkadHpVLlett/f7Gpx7BmadR1mkTvmMbVHiHtZMtsfrXHYEkgh7gDhVJiMyA+RFBLWPVOyDO2pOu2/z+dQ8AuPccOQz9VAUKCSAxJOw86tyTeeLyLqNf2/zwUQ0f4RKN3uv7d+PoHMHZYs+HvMMrLJy9ntCFgQugIYzFW+hrfmd65w+47PmHW2zGi6mVI7yIJGnPaarcYw7MjXLAbrl7LgFs4QnNmRec9nxERQzgvWJikL2i2YMwW4QCVZTBzd+1Jix+8g57qr0HcnGSi1fPYvFOl69czpbcqHYNMbTA1iAT2tPAVqBiVujDXUdWW4AYB1UroVYcjJrze9gmv4m4LSHqzd7UQFAzak+EEmtvguptlFtLFtDMgMST+8Z8TyrTiyrHHZHrnj8jm63SRyzWVr4lVP81/izScUYBEBMAkgwSNwQdRqN6zN4W3tk4YQVYI4+CI3MERMQZ7q2nC+pxIYMufKs9oMACdvpWE/KRwxMK1tsNKLczq5DE52UqQTJOwYisGLTvLNx9X1/s6qyqEUZrH3CLht3BlMycjNGUxOxhpCjWJJ8oq/0r4GuCNpYKs65oJJ7J29ZnSs4C5caszcoktOpAHOZrUdIQVbJirxu3BhrLWpa4+VnSX7Td7DbbStHtDCsThJWq7Uen6dCYZbty8+rE4Jwe7et9YDClsi6El23hQOQGpPgahv4TFqzAAAKqsognrMyhtDy3rT8N4gtrAYV1bKo6xXgSQTcEmN+R9D40C4p0pN+7cMaAMLQUGXAOk+mtYdHHNqIzml1Jqvs6/2X5PdwcU/VWHOL8Pw1vCK4uOb5KkqdUyEESGAj4gRvR7ogt1cMpNlxbguLmmUhmPLeI1navLf0ozCMiXAqgFHUspC84BnTwNb650usJgzbLtbvZbY6plymCyiU5FQs7ToKvlhyYHtk7fkqlKE1a/Q1eH49ZDhQwLTENIHPmRpqIoJ0vxq9dbt2lQXGDaK8jTfMABrWN4hjYbtNpGmkb+I5+NU+Mi7m69C5bTM+pIMZZnuihjwwz5GpOrXH38Ex5pxx3XT5/cK2ekKYdnsXES4SDLAdu08jYzEAZtN5I13FEcNcW4M9tpG0855zNed3b6kBVWDzaZzeMHn4zRbgXEhZD5ycp7te1sK2az2ZGOn3Q+Zf1H0mufvqn8r/AKG7wGAN98gfKQCZdoXTx76F8U4YlwqbiK7KCO3mgdqCAAY1HgdvYfwnpNbt35vsOqBMZFfNz+I+21aPot1OMZhmJFvKTAI+ImBqB3GuNDHOLR0cuXFOLp+OAf0B4CbOKu3VbLbyZckkyS0gnlCgf6q1HSok20HLrAWHeFBMePf6VoDYtx2BBAgDvH9ignHLwVbbETFwQIB3VtwdxE11NPJrmXozj51Fv4fVGfCql0hWLWyMwJ02EssTvP3Vfx+Gu9WHQBRGqknNOmsyO8aVLauDq3KlZIg9kc9wD5DSkdma2AzQsgciYHy50cmpxOUZMmPHkjaIOEpc6wO2UAKNRz0gRrtFajNS8KwC3pZyYAAGXQCNteZj61f/AEUve1R5I2SSbMbZ4JaZQerGoHIg6ieYBFVcV0dsaAp7E/jWh4dayp1ZyAgzlW41whW2LM/a1Ob2p9+1WeWaVdlcMMVLozuB4KikQIgkjU+XM+NQ9MuGNesCys9u5bB7soYE8vCa1NnDxUWOtSUH8VZ3lldmhQRk+GcPf88xN1pysttbZB5KNQe4zFZ7pj0fxF++SroEXRQzNMR/KeZJ9a9Gwln4j3tXYrAhoMfjTQlOXRJbV2eJYrhLYQFnZC0dkLOhJgEyB3H2NU8Pxy8lk4dCoQyCMok5t9T517FxPglptWtq38yg/UUO/QFga9Rb/oX8KaWXb8LQFC+UeZ4YC0jXrlsM0KlsNmA1SC0Aiez6UVxtux+ah/ztzdyA9UtxAgYjVRbVdpP+9Q9IMBiLlwBbFzKo+ydz+AgUMHAsTP7C5/TVrkvIqTC2IwltsIrHE2CzKn6sa3g0gQYbTTmR31SxV67cdksqXVdyBMb7nl3elbHhnDVw+CvrkZr163Ex8LZGygE7KCd/9hWV4jeexh0sAlS5LuFPfyJG/d6U2KbjbgyucLknJfzyFOjfSS3h7fV3i6lSTlUAySZ3kxHl61R4riTi7puWldg0ADLr3cpkz9aKYHjWAt4dLZRGuBACTYmWjXVgJ17yKh6FYzDpbIuvcW4bnYFtM2bQEcjGs7UmW52/U14MzxStBjDWJwzI1p0ZbWWWthSWCakSJInnWh/I7C4J7hAzXLrE+SKoA/7j6mspxXi2PYsDauhJYKRbiV1AJkHcUe6FcQTCcNutcVra2rj6NucyrAXaZbT3qXOMHFdMpc98raKHTvHNbxCPbOW4E1IG8nmOYjlQXhuPa41/F3iZtW+yEHZ1Daa7axWc4j0iu3nZ7mUkn2E6KNdgNKnwF5Hs3UuXGtOxTLAc2ysy2cKCfLzra3heFRS+KquvryUx95vd9WVeBhrt+3bDMoZhMTsNSYG+gr1u3ihbUKDoBA8hpXntvDYWyyXVxThkGUDIAYgy0551LHQUbsKrrnXGrG/aEECY1DGRr399ZMk/WRao30F+lHS27g7No2gpe7ccy4zLktqBESN2uf6TQrjfGrmN4dYu3ktqxxFwDICAVVBJgkxrpvyoD00u5hZTrFfqg6kgiTmbPJAJ5yPSh+Mxyi1hrdpvhRi40+JjmM+pNWafJGGSM2DJBuLRNYfJdtuP3WDf0tI+lepNcLQzWyZ2JQnT2rxc37jsFBJJICgQNSYA969OToGV/wAZ/LOII1naNzWjXaiGVramVYcbiuWFuqss6obdsltBNsRoCTMr4V5x0iULibyoNrjKoUbEEDsgeM1s8Pw382xNtS5ZSGIJMx2csT/ln1rN9IOJCzcvLaWLjXGJuaE9o5jHvEetNopSjbirbDNJumyTov0duNBk2rmsTqAsbuAJE7RV/HdF7xvA3VDQuly24AIGystwTI8NNfav0BxjB7rO5MqupPOTWxuY0NGo96XU+8ipb6b/ALfRDRcZSSjwgHe6MMqdaLiuqiQhWTuNJ00EGRHrWYfjt1bhcKACxlP3d+Xd51v7ePW2IZgNTv51hukiq124UAA0iNtANfejodNCcuVw10Lm1Eofe+yxhcbg7zh8ipcmdeyZ9Oy1HMFwvrWLpaVmXQ/BoY0kMw/vurztrM1v/wAnN7JauSd3Ea9w/wB6szaB4/iU3Xhh/EqSqlfkdiujBYuz4ZtQWzKdAY07CNEUe/J/ww2cMXMTcfMDEEooCgH1z+9Ejiswir3DMILWHRJnKImN9Sdu+udkhtaoshPcuREx6M0KdQe73qp0gu5UBie2oGgOpkAwe4kH0odxgPbu9anwj4h5bk+FFrCpiUS4crKQdDqpkgzGxiND4mhjd3FjzjSUkZbEYwAMmUCCZI0iDOmniRoefrUBxCskl8g1AzamORgVrW6O4U/4Vtf5My7fykVQx3R3DZs2a6hknsPI1MmUaRFWSxwpWuvqVxySt16kHCLrNdVMzOJBCozKW7JJPfGx2op1WI7r/u1RcHwAs31vJcDKBGujQRHIRWl/SY+0fag4c3QVPjkAcHRlyhMCLCt8ZLIGWJgEKDmO3PnRZk1oFZ4jxO5mAwdmySNGuXXMHaQqprGlH7KNC5oLQMxG0xrE8prJNjJEgWqWOtzGtEgtV8QtUssKWEtHYVZuIPapcNApzRNdLSLHGNy7ObrXmclHGuCjjcOCkmqlvCZgs7T8hFEsS0iPGomEADuFZ9Q4ym2jXp1OMEpAS7Y1qNsPHI0WNqm9XJFY9ppsz/HbnU2WkQX7APdO59gR615DxnFB7zGdB2R5D/ea99v4cHQgGe+qH6LtDa1bH+Vfwq+ObZHbRW4W7PBMw7xXoX5POG2wVvXNSDlQchp2m89So9a3q4JRsoHkBUqYYSNKjz36BWMW83aOSB2ZGkiY7uded/lEs3TZz5myK1sOCIzGG7ZEfabbxr1BwsGN4oD0j4HbxNm4XYgKhJOmkLy9fU99WvJFS4K4wdcmC4Jg8OuGzW1DO1tS7uA2VtcyqNhHfQfhq/nuIW1mKJlOu7Qg0HcPLlRXHKLGEyAxICyd9d9B61neF49sO/WWoLQVllmAd4E76VfJUVxd9hzj/RC1h7DXReuSBIBSQSTAEqNPM0T6H4ew2FBuYK5fbUM6IrAiQwBlgdNOXIVl+JdI8ReUozAKdCFRRPm0ZvnWo/JvicQzfmyXclsKznsKY25nXcgb0j4XIzt9EnGMThFuDq8IyXFYks6gawfiAJM6zqN6zXH7wvZWyqpUmSNyGgawOUD51tuk/RFFPXNiWzXG1kIo0WSRpyVazPE+jwTD9eLrvKgqMwZTOusDkJmpGUX0VvFO9zZmeH3Mt5H3CNmjvy6ge4FajG9IAz5hvGp8hoPDnQLo1hLd6+LdxsoKsQfEQY9prd2Oh+EaNXP8tyQfMRVilte4kobuLKmFwN+9bW7bvdlpgEsYgwRPgaxXSS1ct4l1uGW7JkTBlF1Ex5elej4joqCAqYq9aUEkKpygZt/hifU1i+mfR65h3ts117y3OznckkEH4ZJOkGR60ryzb74LFCKX1G9DbF24botvljLMzrOaNvKtR+hsQd8Qf9X4is30e4A7Y27gzcuWyuaShy5shAE+hmtmPybWm+O5cf8Amc/cKDyZPR/0Dth6oDcSwF21bLLimzSNA2XcgHUv3UIxV/XtanTWZmec8/Ot5Y6AYZBGQMJmGJOvfWc6W8FGHvWwgARhK9wKiCPp71o0eWccjd8v6FWeEXFKjM3jWt6PcDu3LCOl7IWLQmUkkD96R3+XKsliFZmCiCZCjxJOleucRt2sJhQlkLc6thmMySIynblOsbazWrU6mbSiVYca7YH4dwu7bcOb2YCdIOsiOZH0rVYji1i0Ft3L1tHy5sruobKSdVDb7HburIW+ldo6MGU+elYjp5ilu4gOplTbUeoLSD71glCfcmaFKHUT1heP4QDM2JswRMG4mxE/DM7Huod0dLISEJayzM1tt1KEkrHdGgHh6GvGMGFNxA3wl1B8iwn5V7SuMOypoBA12A5QKOPHbvwM8lKvIcN+oMS8ihfX3DyArhcucyv9+tWZIbotFcJVKy5gL8LHdpU/5xQVrygEdYqyZ0K/Q1D+cp/7gey/jRhdKySq+A7b6d2bjAW7GIJ1ibcZv4Vk6kmNPCi/Bcfcv5y+HuWACMvWFZaRqYUmIok+CQAlUQGNCFAM8thT0adRz1965c2q4RoSH20qK8tWrAmfAE1DcWaQYgimEVMbdNNumUqFoiyinph8x8alSzNcEg1LCUzaA0qMWxNXMlPt2tajCDr41qFk1oxisNAmKoC3JpJLkKIrlgAUqWxEQZq0bFToITL/ABT8gKiiGwXetxQbpViCmGy87rBfQax66Vo79qqvGOD27yKrgmNRrBBpoNRmmxZJuLSPFelt/wCC2OWv3D76zpFew4r8nlh3Ltcu68pSPQ5J+dKv5PsINwx87j/+JFaJaiNlaxujx23br178nOCW1hy7L2rrSD/AAAvpufWrlrodhF2sofMFv+6a0eCwyhAoUDKAAAABA0GnlVbzKXA2xoy3THhH5x1e5GuhMAQQSRpvE93LXSgPS3/9fBdWlshQgtidhmIEg8zXpnEbUW0Pi3PwH41gemXDLmKcW5BtiCqh9Q0b/Dv4x9aMZ816BUL6PPODWbli9hcQVAS48KWjKwzdW4IPgd/EGvZ8d0cQkEAKY1y6QZI5afKsnb6GtcKi7d7CgBQg+EDYDMI/s16At4mNzp30081fKxVDyjPtwe8hhLs+DifnWQ/KNZfJbts6C4GzgLOoiJnlXrC4bNBFDOJcHth5Ntc86kATPfNT3/Fsnu/B5vwq49vjD3CGOdNHjQ5ramST5GvQ7HFM24B/lb7qbd6Po+IDNlMCII1IyxDNMEDcQBqavYvoVYKhkLo3OCCJ8jr86ZTg+2BxkhiY1NtR5igXTC/h2VVuMSyksMkEwQRBJ2nT2peKcPvYResa8GthlUyDPaIGimRz76xvSTGTczgNl72ET5aR6VbHjlMR+Gihd4cHts/VuO1oTtlj6zU3Q65ZsXS97NAGirIk95il4j0ra5aFgABRz51T4SrE5gJJ+ERLeYH3/TerHNtcsVJIOcXxtq85K2xl72Go/wAw1rG9I7aBx1eaIg5o3Gunhrz7q093A3iJ6q5/Q34UFxGC605cyrGssQo5iJNBttUHhcmbBr0LBcIxLItxCCrKGHaOxEjcUCt8JsQUJUnsxcW4WidO0MqiJ00799KN2eLYm3ZW3ZL5VUKpXDnYaDtXJBof8kF8NcixlCXZquH9Fi1sF8Q6uRPZ+Ee+p9xQa90fvC4ym4jQYnMZI78sTRvhfECLavP7onMY15iO/f2oNx7jiPbFwQxBGh0kEga8udYMOty7qmzY4YptJKl/Ox9ro3O91fIDX5mp/wDhhftn5fhQi5xntpAbLE9kGO7ceFQ5U/517/5X/Gt0nN8qQZYcUTd3vym4Af4rk+FpvvWqd38oKshXDWcTcaIU9VCzGk84o4OgmGWQDHiqoCPKQaJ8H4VbwoNu2WIbtSxkltj8stZZTgukUpMu9H8RdbDobyZLzoocaaHntprG3KrN+2QYNJbOoqW42YsxqvtDFUikK08mmFqrbCT2YA176juVGxpDR3Eo6Knw7AGoADTkoJhLvEnBVQP71oWi61avmY8qjtpuaMpWyJUhQBSOOVS2Uk0t1Nae7RCo4pt4yfSrFy3ULW6rYSu9umdVVwrSqtLQbKXVU9EjarFxakRdKNEsovbnek6sDarN1dajCLqR3Uow9W8FaBzHuFPiikBjsDa2qpxXV4orw8SwFDeJj9Yadr4QLshsDtk0ZtP8AqyPKg2H3NELDGIoRIzIflNvxh7afavD2VHP1isbb+HWivT/iXW4g2NhYI/zF0VjPiAR7mgrYlVAViFPjpPkTvW/EqgjLN/GzPdIngqiwsnWABI8Yov0NxEYle8o4/wBJn5T71n+NvN8DuE+9Xej/ABM4e4bnV52ylRJIiYk7GdJHrRkNE9KxN5gJGUn+Jso7t4PdWHwmE/OMd1d8RnZswUwJylhB7tAfGn4rpVfbUJbQ9+WWHq34UDtYx+tDh2zyTnEzMGTNIuBnyelf8F2LaMySDGgITU/uifOKzS9Nb6EC3asWyunaBciPAfhRXhuFxroc+Jv2zJgk2zmUxB1U+PjVx+FhSuUKGIjNAEsSwzEjx1mopKXBJQaZjblzFXzKi4QfsWco137VyKvYHoviXiLYH/UvKh/pQGtK64u3uM47xDfTtU+1xBm0a0wPeJ+h/Gj7quVQt33ZUwvQK8dblyyo/hV3Pu7R8qsf8BJ/7hv/AIkoiuKdRpPpS/pa74/36UOQ7Uba9vVZvjXyb/xrq6sXqXInXlUtr4X8vvrq6jEjK1IK6uqthF5Cmvy8vvpa6gETnSrS11FAFbenW9jXV1FEJLW9de3pa6n9AepG21QXa6upZDDV2pUrq6lIIaea6uqEI729MaurqjCTYXZvT76QV1dR9AMu8M/aL50N4x+1bzrq6rH8gq+Ygw9X8JvXV1JDsZ9HjvST/wBfiP8Aqn6Cuu/DXV1dNfKjE/mZnOI/t1/6a/U1Lf8Ahrq6g+ixFBqdhvi/vurq6q30Mj2J/gTyH0FQYre15D60ldVGHtls/QKYfepuMfsV/mNdXUfUD6ANqrVdXVYIf//Z',
      price: '80,000 VNĐ/lần',
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Đặt chỗ trực tuyến',
      description: 'Đặt chỗ dịch vụ nhanh chóng và tiện lợi qua website',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Check-in QR Code',
      description: 'Check-in nhanh chóng bằng QR code hoặc RFID',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'Hệ thống điểm thưởng',
      description: 'Tích điểm và đổi thưởng khi sử dụng dịch vụ',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section (redesigned) - full bleed background */}
      {/* -mt-8 removes the top padding from the layout's main container so the hero sits flush under the header */}
      <div style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }} className="bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden -mt-8">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Nâng tầm <span className="text-yellow-400">trải</span>
                <br />
                <span className="text-yellow-400">nghiệm</span> sinh viên của bạn
              </h1>

              <p className="text-lg sm:text-xl text-primary-100 max-w-xl mb-8">
                Hệ thống membership hiện đại cho Nhà Văn Hóa Sinh Viên. Tập gym, chơi bowling, và nhiều hoạt động thú vị khác - tất cả trong một ứng dụng.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register" className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-primary-900 px-6 py-3 rounded-lg font-semibold shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Đăng ký miễn phí
                </Link>

                <Link to="/services" className="inline-flex items-center gap-3 bg-white bg-opacity-90 hover:bg-opacity-100 text-primary-700 px-6 py-3 rounded-lg font-semibold shadow-sm">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.003v5.994a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                  Khám phá dịch vụ
                </Link>
              </div>

              {/* Metrics */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400">2,500+</div>
                  <div className="text-sm text-primary-100">Thành viên</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400">50+</div>
                  <div className="text-sm text-primary-100">Dịch vụ</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-yellow-400">98%</div>
                  <div className="text-sm text-primary-100">Hài lòng</div>
                </div>
              </div>
            </div>

            {/* Right - Image card with floating badges */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" alt="Gym" className="w-full h-96 object-cover" />
              </div>

              {/* Floating badges */}
              <div className="absolute -left-6 bottom-6">
                <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3 w-56">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">QR Check-in</div>
                    <div className="text-xs text-gray-500">Nhanh chóng & tiện lợi</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 top-6">
                <div className="bg-white rounded-xl shadow-md px-4 py-3 flex items-start gap-3 w-44">
                  <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V11H3v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Đặt lịch online</div>
                    <div className="text-xs text-gray-500">24/7 tiện lợi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-lg text-gray-600">
              Khám phá các dịch vụ giải trí và thể thao đa dạng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full mx-auto">
                <div className="h-56 bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">{service.price}</span>
                    <Link
                      to="/booking"
                      className="btn-primary text-sm"
                    >
                      Đặt chỗ
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-lg text-gray-600">
              Những tính năng độc đáo giúp trải nghiệm của bạn tốt hơn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - full-bleed and visually separated from footer */}
      <div style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }} className="bg-primary-600 text-white overflow-hidden">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sẵn sàng tham gia?</h2>
            <p className="text-lg sm:text-xl mb-10 text-primary-100 max-w-2xl mx-auto">
              Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt cho thành viên mới
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/register"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Đăng ký ngay
              </Link>
              <Link
                to="/membership"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
