import "aos/dist/aos.css";

import Header from "@/components/Header";
import MainGlowEffect from "@/components/MainGlowEffect";

const headerContent = {
    title: "Soft Skills",
    introduction:
        "As soft skills é a interação com outras pessoas e consigo mesmo, o modo que age e interage com todos em sua volta em situações diversas.",
};

const SoftSkills = () => {
    return (
        <div className="mt-24 lg:mt-32 mx-10 md:mx-16 xl:ml-28">
            <MainGlowEffect />

            <Header content={headerContent} />

            <div className="flex flex-col items-center w-full lg:w-line mb-28">
                <h2
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl md:text-5xl text-justify md:text-center font-extrabold"
                >
                    Assim sendo, posso citar as minhas seguintes soft skills:
                </h2>

                <span className="w-100 h-100 absolute top-[1100px] right-1/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />

                <div className="w-full lg:w-line flex flex-col justify-center gap-2 text-base xs:text-lg sm:text-xl md:text-2xl text-justify font-medium mt-14 md:mt-32 leading-tight">
                    <p data-aos="fade-up">
                        <span className="font-extrabold underline">
                            Comunicação
                        </span>{" "}
                        - decidir como o projeto terá início, opinando sobre as
                        tecnologias que serão usadas, o que terá que ser feito
                        e como teremos que prosseguir. Saber se comunicar
                        adequadamente é fundamental para a tomada de decisões
                        que são cruciais para a empresa, ou qualquer situação
                        que nos encontremos.
                    </p>

                    <p data-aos="fade-up">
                        <span className="font-extrabold underline">
                            Vontade de aprender
                        </span>{" "}
                        - buscar sempre novos conhecimentos para aprimorar os
                        que possue, aumenta o leque de possibilidades que um
                        desenvolvedor possuí ao iniciar um projeto. Não só isso,
                        além de estar sempre buscando aprender mais, praticar é
                        igualmente vital, sendo um hábito que todos os desenvolverores
                        devem desenvolver, por fixar melhor os conteúdos.
                    </p>

                    <p data-aos="fade-up">
                        <span className="font-extrabold underline">
                            Tomada de decisões e flexibilidade
                        </span>{" "}
                        - cada necessidade irá requisitar diferentes linguagens,
                        frameworks e bibliotecas para solucionar, e elas devem
                        ser escolhidas no momento do planejamento do projeto,
                        não deixando ser influenciado pela que mais usa (preferida),
                        porque nenhuma tecnologia é uma bala de
                        prata, possuem tanto os seus pontos fortes, como pontos
                        fracos.
                    </p>

                    <p data-aos="fade-up">
                        <span className="font-extrabold underline">
                            Pensamento Crítico
                        </span>{" "}
                        - analisar a situação e ser autônomo em buscar soluções
                        para problemas que estejam atrapalhando a equipe, mas
                        também para rever soluções mais antigas, buscando
                        aperfeiçoar o que já foi criado com novos recursos, assim
                        como expor o seu ponto de vista baseado em fatos,
                        opinando de forma objetiva e concreta.
                    </p>

                    <p data-aos="fade-up">
                        <span className="font-extrabold underline">
                            Trabalho em equipe
                        </span>{" "}
                        - embora saber trabalhar sozinho de forma independente
                        seja importante, o mesmo pode se dizer do trabalho em
                        equipe. Quando se há um consenso entre todos, a
                        conclusão do projeto se dá muito mais rápido quando
                        feita em conjunto com outras pessoas.
                    </p>
                </div>
            </div>

            <span className="w-100 h-100 absolute top-[1200px] sm:top-[1500px] md:top-[1400px] right-2/4 bg-darkBlue opacity-30 blur-25 lg:blur-50 -z-10" />
        </div>
    );
};

export default SoftSkills;
