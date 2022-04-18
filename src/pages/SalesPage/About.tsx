import React from "react";
import styled from "styled-components";
import Quote from "../../components/Quote";
import SectionHeader from "../../components/SectionHeader";
import MarkusAndMatilda from "../../assets/images/markus-and-matilda.jpeg";

function About() {
    return (
        <Wrapper className="about">
            <SectionHeader text="Om mig" />
            <Quote>
                Min stora passion är att hjälpa människor att leva det liv de
                alltid har drömt om.
            </Quote>
            <AboutWrapper>
                <Photo
                    src={MarkusAndMatilda}
                    alt="Markus and his girlfriend Matilda smiling at the camera in front of a sheep pasture"
                />
                <article>
                    <p>
                        Min formella utbildning består av två kandidatexamen
                        från Göteborgs Universitet, en i psykologi och en i
                        personalvetenskap. I över 5 år har jag dessutom
                        konsumerat hundratals böcker och föreläsningar av vår
                        tids största tänkare inom personlig utveckling. Jag har
                        även jobbat som affärssystemutvecklare där jag hjälpt
                        mindre företag med automatisering och produktivitet.
                    </p>
                    <p>
                        Förut hindrade stressen, min dåliga självkänsla och min
                        vilsenhet, mig från att leva mitt drömliv. Nu vill jag
                        bevisa för dig att du inte behöver sitta fast i
                        situtationen du är i. Om du låter mig visa dig all den
                        kraft och potential du har inom dig så kommer du snart
                        vara på god väg att bli din egen chef.
                    </p>
                    <p>
                        Jag älskar att utbilda och coacha mina kunder i hur de
                        tar nästa steg i sin utveckling, det är min stora
                        passion i livet. Jag ser verkligen fram emot att ha med
                        dig i programmet!
                    </p>
                </article>
            </AboutWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding-block-end: var(--spacing-xl);
`;

const AboutWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    max-width: var(--max-width);
    padding-inline: 1rem;
    margin-inline: auto;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        max-width: 700px;
    }
`;

const Photo = styled.img`
    width: 100%;
    margin-inline: auto;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export default About;
