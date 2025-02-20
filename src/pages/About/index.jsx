import React from 'react'
import doughImage from '../../assets/images/dough.jpg'
import mockup from '../../assets/images/mockup.jpg'
import ImageTextBlock from '../../components/ImageTextBlock'
function About() {


    return (
        <div className="container  mx-auto h-screen p-3 xl:p-0">
            <div className='bg-white p-6 rounded-4xl'>
                <ImageTextBlock
                    imageSrc={doughImage}
                    altText="dough"
                    title="AMACIMIZ DAHA YEŞİL BİR DÜNYA"
                    text="GreenDough markamızın amacı çevre ve iklim değişikliği hakkında insanları bilinçlendirmek ve gelecek nesillere bunu aktarmaktır. Bu hedefi gerçekleştirebilmek için sadece aileler ve yetişkinlerin değil, çocukların da oyun hamuru vasıtasıyla hem eğlenip hem bilgilenmeleri amaçlanmaktadır."
                />
                <ImageTextBlock
                    imageSrc={mockup}
                    reverse={true}
                    altText="mockup"
                    title="NASIL ?"
                    text="GreenDough oyun hamurunun içerisinde yer alan tohumlar ebeveylerin yardımı ile kutu içerisinde yer alan saksıya ekildiğinde fidana dönüşecek ve doğaya ağaç olarak geri kazandırılacak."
                />
            </div>
        </div>
    )
}

export default About