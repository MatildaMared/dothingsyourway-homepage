import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";

function Contents() {
    return (
        <Wrapper>
            <SectionHeader text="Kursens innehåll" secondary />
            <CourseContents>
                <List>
                    <li>
                        <div className="icon">
                            <i className="bx bxs-time-five"></i>
                        </div>
                        <h3>1. Tid</h3>
                        <p>
                            Först och främst måste vi frigöra tid för att du ska
                            kunna jobba på dig själv. Därför börjar vi med att
                            fastställa ditt varför och vilka personer du
                            egentligen vill lägga din tid på. Problemet är inte
                            att du inte har tid. Problemet är att du slösar bort
                            den på saker som inte gör ditt liv bätttre. När du
                            vet varför du är här och vad du ska göra med ditt
                            liv blir det enkelt att säga nej till allt annat.
                        </p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="bx bx-run"></i>
                        </div>
                        <h3>2. Stress</h3>
                        <p>
                            Den senaste forskningen visar faktiskt att stress
                            inte är farligt – så länge vi inte tror att det är
                            farligt. Ja, du hörde rätt! Vårt tankesätt påverkar
                            hur stress, på en rent biologisk nivå, påverkar vår
                            kropp och vår hälsa. I denna del av programmet får
                            du lära dig exakt hur du ska göra för att stress ska
                            påverka dig på ett optimalt och hållbart sätt.
                        </p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="bx bx-heart-circle"></i>
                        </div>
                        <h3>3. Självkänsla</h3>
                        <p>
                            Självkärlek är antagligen den viktigaste komponenten
                            i ett hållbart, produktivt och lyckligt liv. Du kan
                            helt enkelt inte ta hand om dig själv på ett bra
                            sätt om du inte förstår på djupet att du förtjänar
                            det. I denna del får du en djup förståelse av hur
                            oerhört värdefull du är och varför hela världen blir
                            en bättre plats när du känner så. Jag ger dig också
                            kanonbra övningar för att stärka upp denna
                            relationen med dig själv.
                        </p>
                    </li>
                </List>
                <List>
                    <li>
                        <div className="icon">
                            <i className="bx bxs-battery-charging"></i>
                        </div>
                        <h3>4. Energi</h3>
                        <p>
                            I denna del får du lära dig de bästa verktygen för
                            att hålla en hög energinivå hela dagen. Förutom att
                            gå igenom det uppenbara som sömn, träning och
                            fritid, kommer du även att lära dig hur dina tankar,
                            känslor och relationer påverkar energin. Efter denna
                            del kommer du veta exakt vad du ska göra för att ha
                            massvis av energi varje dag.
                        </p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="bx bx-bulb"></i>
                        </div>
                        <h3>5. Fokus</h3>
                        <p>
                            Del fem handlar om hur du tar vara på din tid och är
                            så effektiv och produktiv som möjligt. Du lär dig
                            skapa fullständig klarhet i vad som behöver göras
                            och hur du bibehåller fokus på de viktigaste
                            uppgifterna du har att göra för dagen. Du kommer
                            även att lära dig hur du ska hantera både digitala
                            och sociala distraktioner som hindrar dig från att
                            nå dina mål.
                        </p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="bx bx-compass"></i>
                        </div>
                        <h3>6. Riktning</h3>
                        <p>
                            Du skapar fullständig klarhet i varje ögonblick i
                            ditt liv med hjälp av två saker – fokus och
                            riktning. Att ha riktning i sitt liv innebär att
                            veta var man är, vart man ska och hur man ska ta sig
                            dit. I denna delen sätter vi upp mål och en konkret
                            plan för när du äntligen ska få säga upp dig och
                            jobba med det du brinner för på heltid.
                        </p>
                    </li>
                </List>
            </CourseContents>
            <a href="#offer">
                <Button>Ja, jag är värd detta!</Button>
            </a>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    margin-bottom: var(--spacing-xl);
    background-color: var(--color-white-secondary);
    color: var(--color-secondary-darkest);

    & > *:not(:first-child) {
        padding: 0 1rem;
        margin-inline: auto;
        max-width: var(--max-width);
    }

    & a {
        display: grid;

        & button {
            margin-block-start: var(--spacing-large);
            margin-inline: auto;
            place-items: center;
        }
    }
`;

const CourseContents = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
`;

const List = styled.ul`
    background-color: var(--color-secondary-light);
    padding: 0;
    display: grid;
    grid-gap: 1rem;
    list-style: none;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem var(--color-shadow);
`;

export default Contents;
