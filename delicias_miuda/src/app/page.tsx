import Image from "next/image";
import chefImage from '../../public/images/chef.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <section className="xl:w-[70%] xl:mx-auto ">
      <div className="relative xl:rounded-b-md md:h-[450px] lg:h-[600px] h-[300px] bg-web-main-banner bg-cover bg-no-repeat bg-center flex justify-center items-center md:justify-start md:ps-20">
        <h1 className="relative text-white text-3xl mt-40 xl:mt-60 text-center inset-0 bg-gray-600 opacity-70 px-4 py-2 rounded-lg lg:w-96" >
          {`Uma explosão de sabores`} <br /> {`à cada mordida`}
        </h1>
      </div>

      <div className="flex md:m-6 m-4 gap-6 xl:mx-0">
        <div className="bg-light-rose w-vw md:w-2/3 h-[300px] flex flex-col gap-12 md:gap-20 items-center p-6 rounded-md">
          <h1 className="text-heavy-rose font-bold text-2xl md:text-3xl text-center">O sabor da felicidade dentro da sua casa</h1>
          <p className="text-heavy-rose text-justify text-lg px-2 md:text-xl">De bolos de festa espetaculares a doces personalizados, estamos aqui para transofmrar cada momento em uma experiência doce e memorável.</p>
        </div>
        
        <Image src={chefImage} alt="Chefe" quality={100} height={800} width={800} className="h-[300px] md:w-1/3 md:block hidden rounded-md"
        
        />
      </div>

    <div className="grid gap-6 md:m-6 m-4 xl:mx-0 md:grid-cols-3">
      <Link href={'/produtos/bolosdepote'} className="bg-bolo-pote md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Bolos de pote</h1>
        </div>
      </Link>
      <Link href={'/produtos/Brigadeiros'} className="bg-brigadeiro md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Brigadeiros</h1>
        </div>
      </Link>
      <Link href={'/produtos/Lembranças'} className="bg-bem-casado md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Lembranças</h1>
        </div>
      </Link>
      <Link href={'/produtos/BoloCaseiro'} className="bg-bolo-caseiro md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Bolo Caseiro</h1>
        </div>
      </Link>
      <Link href={'/produtos/Sobremesas'} className="bg-sobremesa md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Sobremesas</h1>
        </div>
      </Link>
      <Link href={'/produtos/Salgadinhos'} className="bg-salgadinho md:flex-1 h-[250px] rounded-md bg-center bg-cover flex items-end hover:scale-105 duration-300">
        <div className="bg-heavy-rose opacity-70 h-12 w-full flex justify-center items-center mb-8">
          <h1 className="text-white text-2xl inset-0">Salgadinhos</h1>
        </div>
      </Link>
    </div>

    </section>
  );
}
