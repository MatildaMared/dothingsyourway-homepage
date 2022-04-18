import React from "react";
import styled from "styled-components";
import SectionHeader from "../../components/SectionHeader";
import MarkusPhoto from "../../assets/images/Markus.jpg";

function Presentation() {
    return (
        <Wrapper>
            <SectionHeader text="Hej, jag heter Markus..." secondary />
            <div>
                <img
                    src={MarkusPhoto}
                    alt="En man i 30-årsåldern, med kortklippt hår och lätt skäggväxt, som ler stort och tittar in i kameran."
                />
                <article>
                    <p>
                        <strong>
                            ...Och stressen fullkomligt förstörde två år av mitt
                            liv.
                        </strong>
                    </p>
                    <p>
                        I min jakt på frihet, framgång och lycka blev jag
                        utmattad och så sjuk att jag vissa dagar inte kunde resa
                        mig upp ur sängen. Jag insåg snart att om jag någonsin
                        skulle kunna få det liv jag ville ha så var jag tvungen
                        att bli expert på att optimera min tid och energi.
                    </p>
                    <p>
                        Under hösten 2021 jobbade jag heltid samtidigt som jag
                        drev mitt företag 20 timmar i veckan. Idag har jag
                        äntligen sagt upp mig och nått drömmen jag längtat efter
                        i många år!
                    </p>
                    <p>
                        Min framgång har dels berott på att jag har ett system
                        som hjälper mig att hålla mig produktiv och att jag gör
                        rätt saker. Men det har också berott på att jag har
                        bättre kunskap om stress och att jag inte slösar min
                        värdefulla energi på saker som inte gör mitt liv bättre,
                        såsom: negativa tankar och oro för vad folk ska tycka
                        m.m. Viktigast av allt är helt enkelt att veta vad exakt
                        man ska göra just idag för att snabbast komma vidare och
                        lära sig säga nej till allt annat. Det gjorde att jag
                        kunde njuta av processen och vara lycklig långt innan
                        jag nått mitt mål.
                    </p>
                    <p>
                        Därför har jag skapat detta programmet för dig! Jag vill
                        ge dig alla förutsättningar du behöver för att kunna nå
                        ditt mål att äntligen bli fri och skapa ett tryggt liv
                        som företagare!
                    </p>
                </article>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: var(--color-white-secondary);
    color: var(--color-secondary-darkest);
    margin-block-end: var(--spacing-xl);

    & > *:not(:first-child) {
        padding: 0 1rem;
        max-width: var(--max-width);
        margin-inline: auto;
    }

    & div {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        & img {
            width: 100%;
            max-width: 500px;
            height: auto;
            border-radius: 1rem;
            margin-right: 2rem;
        }

        @media (max-width: 1200px) {
            flex-direction: column;
            align-items: center;

            & img {
                margin-inline: auto;
                margin-block-end: var(--spacing-medium);
            }

            & p {
                max-width: 550px;
            }
        }
    }
`;

export default Presentation;
