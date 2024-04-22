import React from 'react'
import BioPara from './BioPara'

const BiologicalSequence = () => {
    const data = [
        {
            heading: "BIOLOGICAL SEQUENCE SEARCH",
            para: "Generally prior art searches refers to sequences of nucleotides or amino acids. It is a single, continuous molecule of nucleic acid or protein. is a single, continuous molecule of nucleic acid or protein. Biological sequences generally refer to sequences of nucleotides or amino acids. One hierarchy is that of the underlying molecule type: DNA, RNA, or protein. The other hierarchy is the way the underlying biological sequence is represented by the data structure. It could be a physical or genetic map, an actual sequence of amino acids or nucleic acids, or some more complicated data structure building a composite view from other entries.",
            secheading: "WHY CONDUCT BIOLOGICAL SEQUENCE SEARCHES",
            listpara: [
                "To understand competitors",
                "To demonstrate the patentability and/or freedom to operate concerning certain distinct biological sequences: Types are",
                "Nucleotide sequences (RNA, DNA, Probes, genes, primers, etc.)",
                "Amino acid sequences (antibodies, peptides, enzymes, proteins, etc.).",
            ],
            secpara: "In Biological sequence search, we focus on finding the sequence in patent and non-patent literature. We have a specialized team in searching and examine, bio-sequences-based patents and expertise both in free and paid databases. We utilize extensive searching tools like NCBI-BLAST, EMBL, STN, GenomeQuest, PCTGene, UNIPROT, ExPAsy, GENESEQ, for bio-sequences."
        },
        {
            heading: "BIOLOGICAL SEQUENCE SEARCH LISTING",
            para: "Biological Sequence Search listings allow biological sequence data in patent applications to be collected and transferred to searchable databases used by the United States Patent and Trademark Office (USPTO)/WIPO/EPO /(other jurisdictions) and the public. Biological sequences serve as state of the art and as a reference for future research and innovation. Presentation of biological sequence data in a standardized sequence list format facilitates publication and inclusion in searchable databases. A sequence listing provides a standardized means of presenting the completeness of biological sequence data that is described in a patent application in a single document. More specifically, it includes a list of nucleotide (DNA or RNA) and/or amino acid protein sequences that are described in the patent application by listing their residues and that meet sequence length thresholds A biological sequence search is a single/continuous molecule of nucleic acid or protein. It can be thought of as a hierarchy of multiple inheritance classes. One hierarchy is that of a basic type of molecule: DNA, RNA, or protein. Another hierarchy is the way the underlying biological sequence is represented by a data structure. It can be a physical or genetic map, an actual sequence of amino acids or nucleic acids, or some more complicated data structure creating a composite view from other records.",
            secheading: "",
            listpara: [],
            secpara: ""
        },
        {
            heading: "BIOSEQ: THE BIOLOGICAL SEQUENCE",
            para: "Bioseq represents a single continuous molecule of nucleic acid or protein. It can be a genetic map or a physical map. All Bioseqs have more commonalities than differences. All Bioseqs must have at least one identifier, the Seq-id (ie, the Bioseq must be citable).",
            secheading: "",
            listpara: [],
            secpara: ""
        },
        {
            heading: "SEQ-ID: IDENTIFYING THE BIOSEQ",
            para: "Each Bioseq MUST have at least one Seq-id or sequence identifier to make Bioseq always citable. You can refer to it with some label.",
            secheading: "",
            listpara: [],
            secpara: ""
        },
        {
            heading: "SEQ-ANNOT: ANNOTATION THE BIOSEQ",
            para: "A seq-annot is a self-contained package of sequence annotations or information that refer to specific locations on specific Bioseqs. Each Seq-annot can have an Object-id for local use by software, a Dbtag to globally identify the source of the Seq-annot, and/or a name and description for human display and use. These describe the entire annotation package and allow it to be assigned to a resource independently of the Bioseq resource. A seq-annot can contain a feature table, a set of sequence alignments, or a set of attribute graphs along a sequence.",
            secheading: "",
            listpara: [],
            secpara: ""
        },
        {
            heading: "SEQ-DESCR: DESCRIBING THE BIOSEQ AND PLACING IT IN CONTEXT",
            para: "The seq-descr is to describe the Bioseq (or Bioseq set.. see Bioseq Sets) and place it in a biological and/or bibliographic context. Seq-descrs apply to the entire Bioseq. Some Seq-descr classes also appear as functions when used to describe a specific part of a Bioseq. But anything that appears at the Seq-descr level applies to the whole thing.",
            secheading: "",
            listpara: [],
            secpara: ""
        },
    ]
  return (
    <>
      {data.map((ele,idx)=>{
        return <div className='flex justify-center bg-[#e0efff]'><BioPara para={ele} key={idx}/></div>
      })}
    </>
  )
}

export default BiologicalSequence
